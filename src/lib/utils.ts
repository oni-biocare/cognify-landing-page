import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { revalidatePath } from 'next/cache';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Revalidate the sitemap when new content is added
 */
export const revalidateSitemap = () => {
  revalidatePath('/sitemap.xml');
};
