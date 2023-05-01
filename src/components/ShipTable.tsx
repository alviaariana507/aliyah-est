'use client'
import useShipList from '@/hooks/useShipList'
import { IShip } from '@/store/types'
import * as x from '@mui/x-data-grid'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import useStore from '../store/useStore'
import { Button } from './ui/Button'
import Dialog from './ui/Dialog'
import Icons from './ui/Icons'
import Paragraph from './ui/Paragraph'
import Table from './ui/Table'

const ShipTable: FC = () => {
  const router = useRouter()
  const { shipTableColumns, deleteShip, loadingDelete } = useStore()
  const [open, setOpen] = React.useState(false)
  const [id, setId] = React.useState<x.GridRowId>()

  const { data, loading } = useShipList()
  if (loading) return <div>loading...</div>

  return (
    <>
      <Dialog open={open} setOpen={setOpen}>
        <div className="space-y-3">
          <Paragraph>Do you really want to delete this data?</Paragraph>

          <Button
            onClick={async () => {
              await deleteShip(id!)
              setOpen(false)
            }}
            isLoading={loadingDelete}
          >
            Delete
          </Button>
        </div>
      </Dialog>

      <Table
        header={[
          ...shipTableColumns,
          {
            field: 'col10',
            type: 'actions',
            getActions: (params: x.GridRowParams) => [
              <x.GridActionsCellItem
                key={params.id}
                icon={<Icons.Edit className="stroke-blue-500" />}
                onClick={() => router.push(`/ship/edit/${params.id}`)}
                label="Edit"
              />,
              <x.GridActionsCellItem
                key={params.id}
                icon={<Icons.Trash className="stroke-red-500" />}
                onClick={() => {
                  setOpen(true)
                  setId(params.id)
                }}
                label="Delete"
              />,
            ],
          },
        ]}
        data={data.map((request: IShip) => ({
          id: request.id,
          col1: request.imoNumber,
          col2: request.name,
          col3: request.type,
          col4: request.flag,
          col5: request.grt,
          col6: request.dwt,
          col7: request.hp,
          col8: request.callSign,
          col9: request.yearBuilt,
        }))}
      />
    </>
  )
}

export default ShipTable
