import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toast";
import Providers from "@/components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aliyah est",
  description: "test",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-50 antialiased dark:bg-slate-900">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position="top-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
