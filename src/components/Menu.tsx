"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/Button";
import Icons from "./ui/Icons";
import { FC, PropsWithChildren } from "react";

const Menu = () => {
  return (
    <div className="mx-auto grid gap-3">
      <MenuItem href="/dashboard">
        <Icons.LayoutDashboard />
      </MenuItem>
      <MenuItem href="/ship">
        <Icons.Ship />
      </MenuItem>
      <MenuItem href="/crew">
        <Icons.Inbox />
      </MenuItem>
      <MenuItem href="/admin">
        <Icons.Users />
      </MenuItem>
      <MenuItem href="/me">
        <Icons.User />
      </MenuItem>
    </div>
  );
};

export default Menu;

export const MenuItem: FC<PropsWithChildren & { href: string }> = (props) => {
  const pathname = usePathname();

  return (
    <Link
      href={props.href}
      className={buttonVariants({
        variant: pathname.startsWith(props.href) ? "default" : "ghost",
        size: "sm",
      })}
    >
      {props.children}
    </Link>
  );
};
