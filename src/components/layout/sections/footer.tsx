import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              {/* <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" /> */}
              <Image
                className="border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
                src="/logo.png"
                width={48}
                height={48}
                alt="Home Page"
                priority
              />
              <h3 className="text-2xl">Cognify Metrics</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2" />
          <div className="flex flex-col gap-2" />

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Liên hệ</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Tiktok
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Zalo
              </Link>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Giúp đỡ</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Liên hệ với chúng tôi
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Góp ý
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Mạng xã hội</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Tiktok
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Zalo
              </Link>
            </div>
          </div> */}

        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Design and develop by Cognify Metrics developers team
          </h3>
        </section>
      </div>
    </footer>
  );
};
