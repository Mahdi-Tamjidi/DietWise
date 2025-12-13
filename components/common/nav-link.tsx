"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href !== "/" && pathName.startsWith(href));
  return (
    <Link
      onClick={onClick}
      href={href}
      className={cn(
        "transition-colors text-sm duration-200 text-text-third hover:text-main-color-hover",
        className,
        isActive && "text-main-color-hover"
      )}
    >
      {children}
    </Link>
  );
};
export default NavLink;
