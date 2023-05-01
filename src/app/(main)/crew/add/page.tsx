import CrewForm from "@/components/CrewForm";
import LargeHeading from "@/components/ui/LargeHeading";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Aliyah est | Add Crew",
};

export default function AddCrewPage() {
  return (
    <>
      <div className="flex items-baseline justify-between">
        <LargeHeading size="sm">Add New Crew</LargeHeading>
      </div>
      <CrewForm />
    </>
  );
}
