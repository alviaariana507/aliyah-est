import AdminForm from "@/components/AdminForm";
import AdminTable from "@/components/AdminTable";
import LargeHeading from "@/components/ui/LargeHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aliyah est | Admin",
};

export default function AdminPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <LargeHeading size="sm">Admin Management</LargeHeading>
        <div>
          <AdminForm />
        </div>
      </div>
      <AdminTable />
    </>
  );
}
