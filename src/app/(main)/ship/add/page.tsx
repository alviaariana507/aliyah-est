import ShipForm from "@/components/ShipForm";
import LargeHeading from "@/components/ui/LargeHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aliyah est | Add Ship",
};

export default function AddShipPage() {
  return (
    <>
      <div className="flex items-baseline justify-between">
        <LargeHeading size="sm">Add New Ship</LargeHeading>
      </div>
      <ShipForm type="add" />
    </>
  );
}
