import ShipForm from "@/components/ShipForm";
import LargeHeading from "@/components/ui/LargeHeading";
import { db } from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aliyah est | Edit Ship",
};

export default async function EditShipPage({ params }: any) {
  const ship = await db.ship
    .findFirst({ where: { id: params.id } })
    .then((data: any) => {
      const { createdAt, updatedAt, ...rest } = data;
      return rest;
    });

  return (
    <>
      <div className="flex items-baseline justify-between">
        <LargeHeading size="sm">Edit Ship</LargeHeading>
      </div>
      <ShipForm type="edit" ship={ship ?? undefined} />
    </>
  );
}
