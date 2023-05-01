import ShipTable from "@/components/ShipTable";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aliyah est | Ship",
};

export default function ShipPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <LargeHeading size="sm">Ship Management</LargeHeading>
        <Link href="/ship/add" className={buttonVariants({ variant: "ghost" })}>
          <span className="hidden md:block">Add New Data</span>
          <PlusCircle className="md:ml-3" />
        </Link>
      </div>
      <ShipTable />
    </>
  );
}
