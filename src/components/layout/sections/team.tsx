import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFBhTklN9m_dg/profile-displayphoto-shrink_800_800/B4EZRUPMM4HsAc-/0/1736580057943?e=1741824000&v=beta&t=MqLCJBJqYyDp1u2LyQc1zLQodT5o8M1E3Z8rE-4u7fM",
      firstName: "Trịnh",
      lastName: "Thu Trang",
      positions: ["Hơn 6 năm kinh nghiệm điều hành trung tâm vật lý trị liệu"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/trang-trinh-thu-1539b1186",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/share/15cSoJCv3C/?mibextid=wwXIfr",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C5603AQG_vcIU5Lm4bw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1638849581219?e=1741824000&v=beta&t=SM5_xfJI1q29avjvDqJONye-mlu2P8HswRH51fB5Luc",
      firstName: "Nguyễn",
      lastName: "Văn Tân",
      positions: ["Hơn 5 năm xây dựng và phát triển sản phẩm công nghệ"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/tân-nguyễn-văn-35167b1a5/",
        },
        {
          name: "Github",
          url: "https://github.com/doctor-blue",
        },
        {
          name: "Youtube",
          url: "https://www.youtube.com/@vantan.official",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQE3xX5YCSR7MA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670041345884?e=1741824000&v=beta&t=U6EhZAZPtOj0-bxmC5IzuAroN-C2-ktI1Clmr95xVTA",
      firstName: "Nguyễn",
      lastName: "Ngọc Trâm",
      positions: ["Gần 10 năm hoạt động trong lĩnh vực tài chính doanh nghiệp"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/nguyễn-ng%E1%BB%8Dc-trâm-889156259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/share/18hvx4sgFG/",
        },
      ],
    },
    {
      imageUrl:
        "/img_kimhuong_avatar.jpeg",
      firstName: "Nguyễn T.",
      lastName: "Kim Hường",
      positions: ["Với hơn 5 năm kinh nghiệm kinh doanh và thiết kế trải nghiệm của khách hàng, luôn đặt sự hài lòng của khách hàng lên hàng đầu"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/hường-nguyễn-20a467337/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/share/19gGDgpcvD/?mibextid=wwXIfr",
        }
      ],
    },
  ];
  
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "Facebook":
        return <Facebook />;
      case "Youtube":
        return <Youtube />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Đội ngũ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Đội ngũ sáng lập và phát triển
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className=" text-transparent px-2 bg-gradient-to-r from-[#66BB6A] to-primary bg-clip-text">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
