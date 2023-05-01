import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/Button";
import { authOptions } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex h-20 items-center justify-between border-b border-slate-300 bg-white/75 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="container mx-auto grid w-full max-w-7xl grid-cols-2 items-center">
        <Link
          href="/"
          className={cn(
            "relative mr-auto w-64 h-10",
            buttonVariants({ variant: "link" })
          )}
        >
          <Image
            fill
            src="/logo.png"
            alt="logo"
            className="rounded object-contain backdrop-blur-sm dark:bg-white/75"
          />
        </Link>

        <div className="ml-auto flex gap-1 md:gap-4">
          <ThemeToggle />
          {session && <SignOutButton />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
