import CrewTable from "@/components/CrewTable";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aliyah est | Crew",
};

export default function CrewPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <LargeHeading size="sm">Crew Management</LargeHeading>
        <Link href="/crew/add" className={buttonVariants({ variant: "ghost" })}>
          <span className="hidden md:block">Add New Data</span>
          <PlusCircle className="md:ml-3" />
        </Link>
      </div>
      <CrewTable />
    </>
  );
}
