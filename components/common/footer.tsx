import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-15 flex flex-col text-sm ">
        <div className="grid md:grid-cols-4 gap-12 mb-10 ">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1.5 tracking-tighter">
              <Image src="/logo.svg" alt="logo" height={30} width={30} />
              <span className="font-bold text-2xl">
                DietWise<span className="text-main-color-hover">AI</span>
              </span>
            </div>
            <p className="text-text-secondary leading-loose">
              The most advanced AI nutrition coach on the market. Smart,
              adaptive, and personalized to your unique physiology.
            </p>
          </div>
          <div className="flex flex-col  gap-5">
            <h4 className="text-base font-bold text-white">Product</h4>
            <ul className="flex flex-col gap-4 text-text-secondary">
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-bold text-white">Resources</h4>
            <ul className="flex flex-col gap-4 text-text-secondary">
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  gap-5">
            <h4 className="text-base font-bold text-white">Legal</h4>
            <ul className="flex flex-col gap-4 text-text-secondary">
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-main-color transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6  md:gap-0 md:flex-row items-center md:justify-between text-text-secondary/50 border-t border-white/10 pt-10">
          <p className="text-sm ">
            © 2024 DietWise AI Inc. All rights reserved.
          </p>
          <div className="flex items-center justify-center text-center gap-4 ">
            <Link
              href=""
              className="hover:text-main-color transition-colors duration-200"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href=""
              className="hover:text-main-color transition-colors duration-200"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href=""
              className="hover:text-main-color transition-colors duration-200"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
