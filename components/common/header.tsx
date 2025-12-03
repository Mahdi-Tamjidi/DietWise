"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "@/components/common/nav-link";
import { LogIn, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ",
        scrolled
          ? "bg-text-dark/80 backdrop-blur-md border-tertiary-dark py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="flex items-center justify-between mx-auto container">
        <div className="flex items-center flex-1 gap-2">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="text-text-third " />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-text-dark border-r border-tertiary-dark md:hidden py-6"
            >
              <SheetHeader>
                <div className="flex items-center justify-baseline gap-2 mb-4 tracking-tighter">
                  <Image src="/logo.svg" alt="logo" height={30} width={30} />
                  <span className="font-bold text-2xl">
                    DietWise<span className="text-main-color-hover">AI</span>
                  </span>
                </div>
                <SheetTitle className="py-3 border-b border-tertiary-dark">
                  <NavLink className="text-xl font-bold" href="/demo">
                    Live Demo
                  </NavLink>
                </SheetTitle>
                <SheetTitle className="py-3 border-b border-tertiary-dark">
                  <NavLink className="text-xl font-bold" href="/hiw">
                    How it Works
                  </NavLink>
                </SheetTitle>
                <SheetTitle className="py-3 border-b border-tertiary-dark">
                  <NavLink className="text-xl font-bold" href="/pricing">
                    Pricing
                  </NavLink>
                </SheetTitle>
                <SheetTitle className="py-3 ">
                  <NavLink className="text-xl font-bold" href="/testimonial">
                    Stories
                  </NavLink>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center  gap-2 tracking-tighter">
            <Image src="/logo.svg" alt="logo" height={30} width={30} />
            <span className="font-bold text-2xl">
              DietWise<span className="text-main-color-hover">AI</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex gap-10 font-semibold ">
          <NavLink href="/demo">Live Demo</NavLink>
          <NavLink href="/hiw">How it Works</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/testimonial">Stories</NavLink>
        </div>
        <div className="flex flex-1 items-center  justify-end">
          <Button className="px-5 rounded-2xl bg-main-color hover:bg-main-color-hover transition-colors duration-200 text-text-dark font-bold hover:text-text-dark gap-1">
            <NavLink
              className="flex items-center justify-center gap-1.5 text-text-dark hover:text-text-dark "
              href="/sign-in"
            >
              <span>
                <LogIn strokeWidth={2.5} />
              </span>
              Sign In
            </NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
