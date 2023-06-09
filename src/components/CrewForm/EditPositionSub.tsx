'use client'
import { Crew } from '@prisma/client'
import { Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import useStore from '../../store/useStore'
import Form from '../fields/Form'
import { Button } from '../ui/Button'
import Dialog from '../ui/Dialog'
import PositionSubForm from './PositionSubForm'

interface EditPositionSubProps {
  data: Crew
}

const EditPositionSub: FC<EditPositionSubProps> = ({ data }) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const editCrew = useStore((state) => state.editCrew)

  const methods = useForm({
    defaultValues: {
      id: data.id,
      mainRank: data.mainRank,
      prevVesselType: data.prevVesselType,
      englishSkills: data.englishSkills,
    },
  })

  return (
    <>
      <Button onClick={() => setOpen(true)} size="sm" className="ml-4">
        <Pencil />
      </Button>

      <Dialog open={open} setOpen={setOpen}>
        <Form
          methods={methods}
          onSubmit={async (values) => {
            await editCrew(values, router)
            methods.reset()
            setOpen(false)
          }}
          className="max-w-4xl space-y-3"
        >
          <PositionSubForm />
          <Button
            type="submit"
            className="w-full"
            isLoading={methods.formState.isSubmitting}
          >
            Submit
          </Button>
        </Form>
      </Dialog>
    </>
  )
}

export default EditPositionSub
