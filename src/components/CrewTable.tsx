"use client";
import useCrewList from "@/hooks/useCrewList";
import * as x from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import useStore from "../store/useStore";
import { Button } from "./ui/Button";
import Dialog from "./ui/Dialog";
import Icons from "./ui/Icons";
import Table from "./ui/Table";
import Paragraph from "./ui/Paragraph";

const CrewTable: FC = () => {
  const router = useRouter();
  const { crewTableColumns, deleteCrew, loadingDelete } = useStore();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState<x.GridRowId>();

  const { data, loading } = useCrewList();
  if (loading) return <div>loading...</div>;

  const statusOpts = [
    { name: "Crew Standby", value: "standby" },
    { name: "Crew Onboarding", value: "onboarding" },
    { name: "Ex-Crew Standby", value: "ex-standby" },
    { name: "Out", value: "out" },
  ];

  return (
    <>
      <Dialog open={open} setOpen={setOpen}>
        <div className="space-y-3">
          <Paragraph>Do you really want to delete this data?</Paragraph>

          <Button
            onClick={async () => {
              await deleteCrew(id!);
              setOpen(false);
            }}
            isLoading={loadingDelete}
          >
            Delete
          </Button>
        </div>
      </Dialog>

      <Table
        header={[
          ...crewTableColumns,
          {
            field: "col10",
            type: "actions",
            getActions: (params: x.GridRowParams) => [
              <x.GridActionsCellItem
                key={params.id}
                icon={<Icons.Info className="stroke-blue-500" />}
                onClick={() => router.push(`/crew/${params.id}`)}
                label="Edit"
              />,
              <x.GridActionsCellItem
                key={params.id}
                icon={<Icons.Trash className="stroke-red-500" />}
                onClick={() => {
                  setOpen(true);
                  setId(params.id);
                }}
                label="Delete"
              />,
            ],
          },
        ]}
        data={data.map((request: any) => ({
          id: request.id,
          col1: request.idNumber,
          col2: `${request.givenName} ${request.surName}`,
          col3: request.phoneNumber,
          col4: request.mainRank,
          col5:
            statusOpts.find((item) => item.value === request.status)?.name ??
            undefined,
        }))}
      />
    </>
  );
};

export default CrewTable;
