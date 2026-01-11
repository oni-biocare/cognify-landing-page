import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');
const authorDirectory = path.join(process.cwd(), 'src/content/authors');

// Type definitions
export interface Author {
  name: string;
  avatar: string;
  bio: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  categories: string[];
  content: string;
  readingTime: string;
}

// Helper to get author data
export async function getAuthor(authorSlug: string): Promise<Author> {
  try {
    const fullPath = path.join(authorDirectory, `${authorSlug}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    return JSON.parse(fileContents);
  } catch (error) {
    // If no author file exists, return default author
    return {
      name: 'AI Improvement Team',
      avatar: '/images/avatars/default.png',
      bio: 'AI Improvement Specialists',
    };
  }
}

// Get all blog posts with metadata
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // For development, we'll return mock data as the content directory may not exist yet
  // In production, this would read from the filesystem
  if (!fs.existsSync(postsDirectory)) {
    return getMockBlogPosts();
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      // Get author data
      const author = await getAuthor(matterResult.data.author);
      
      // Calculate reading time
      const stats = readingTime(matterResult.content);
      
      // Process markdown to HTML using remark with GitHub-flavored markdown support
      const processedContent = await remark()
        .use(remarkGfm) // Add GitHub-flavored markdown support
        .use(html, { sanitize: false }) // Don't sanitize to allow formatting
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
      
      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        coverImage: matterResult.data.coverImage,
        categories: matterResult.data.categories || [],
        author,
        content: contentHtml,
        readingTime: `${Math.ceil(stats.minutes)} min read`,
      };
    })
  );
  
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // For development, we'll return mock data
  if (!fs.existsSync(postsDirectory)) {
    const posts = getMockBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  }
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Get author data
    const author = await getAuthor(matterResult.data.author);
    
    // Calculate reading time
    const stats = readingTime(matterResult.content);
    
    // Process markdown to HTML using remark with GitHub-flavored markdown support
    const processedContent = await remark()
      .use(remarkGfm) // Add GitHub-flavored markdown support
      .use(html, { sanitize: false }) // Don't sanitize to allow formatting
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      coverImage: matterResult.data.coverImage,
      categories: matterResult.data.categories || [],
      author,
      content: contentHtml,
      readingTime: `${Math.ceil(stats.minutes)} min read`,
    };
  } catch (error) {
    return null;
  }
}

// Get related blog posts
export async function getRelatedBlogPosts(currentSlug: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // For now, just return the 3 most recent posts
  // In a real app, you could implement more sophisticated matching based on categories or content similarity
  return otherPosts.slice(0, 3);
}

// Mock data for development
function getMockBlogPosts(): BlogPost[] {
  const defaultAuthor = {
    name: 'AI Team',
    avatar: '/images/avatars/default.png',
    bio: 'Market Intelligence Specialist',
  };
  
  return [
    {
      slug: 'top-e-commerce-trends-2023',
      title: 'Top 10 E-commerce Trends That Will Define 2023',
      date: '2023-01-15',
      excerpt: 'Discover the most important trends that will shape the e-commerce industry in 2023 and how AI-powered market intelligence can help you stay ahead.',
      coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
      categories: ['e-commerce', 'trends', 'market-intelligence'],
      author: defaultAuthor,
      content: '<p>This is a sample blog post content. In a real application, this would be the full HTML content generated from markdown.</p>',
      readingTime: '5 min read',
    },
    {
      slug: 'ai-powered-keyword-research',
      title: 'How AI is Revolutionizing E-commerce Keyword Research',
      date: '2023-02-10',
      excerpt: 'Learn how artificial intelligence is transforming keyword research for e-commerce businesses, providing deeper insights and competitive advantages.',
      coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
      categories: ['ai-trends', 'keyword-research', 'seo'],
      author: defaultAuthor,
      content: '<p>This is a sample blog post content. In a real application, this would be the full HTML content generated from markdown.</p>',
      readingTime: '7 min read',
    },
    {
      slug: 'market-intelligence-case-study',
      title: 'Case Study: How Brand X Increased Sales by 200% Using AI Market Intelligence',
      date: '2023-03-05',
      excerpt: 'A detailed case study of how an e-commerce brand leveraged our AI-powered market intelligence platform to dramatically increase their sales.',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
      categories: ['case-studies', 'success-stories', 'market-intelligence'],
      author: defaultAuthor,
      content: '<p>This is a sample blog post content. In a real application, this would be the full HTML content generated from markdown.</p>',
      readingTime: '10 min read',
    },
    {
      slug: 'competitive-analysis-guide',
      title: 'The Ultimate Guide to E-commerce Competitive Analysis in 2023',
      date: '2023-04-20',
      excerpt: 'Everything you need to know about conducting effective competitive analysis for your e-commerce business using AI-powered tools.',
      coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
      categories: ['tutorials', 'competitive-analysis', 'e-commerce'],
      author: defaultAuthor,
      content: '<p>This is a sample blog post content. In a real application, this would be the full HTML content generated from markdown.</p>',
      readingTime: '12 min read',
    },
    {
      slug: 'product-trend-prediction',
      title: 'Predicting the Next Big Product Trend with AI Market Intelligence',
      date: '2023-05-15',
      excerpt: 'How advanced AI algorithms can identify emerging product trends before they go mainstream, giving your e-commerce business a competitive edge.',
      coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
      categories: ['ai-trends', 'product-trends', 'forecasting'],
      author: defaultAuthor,
      content: '<p>This is a sample blog post content. In a real application, this would be the full HTML content generated from markdown.</p>',
      readingTime: '8 min read',
    },
    {
      slug: 'seo-strategy-for-ecommerce',
      title: 'Building an Effective SEO Strategy for E-commerce in 2023',
      date: '2023-06-02',
      excerpt: 'A comprehensive guide to creating and implementing an SEO strategy that drives organic traffic and conversions for your e-commerce store.',
      coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
      categories: ['seo', 'e-commerce', 'tutorials'],
      author: defaultAuthor,
      content: '<p>This is a sample blog post content. In a real application, this would be the full HTML content generated from markdown.</p>',
      readingTime: '9 min read',
    },
  ];
} 