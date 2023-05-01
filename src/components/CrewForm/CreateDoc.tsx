'use client'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import useStore from '../../store/useStore'
import Form from '../fields/Form'
import { Button } from '../ui/Button'
import Dialog from '../ui/Dialog'
import Icons from '../ui/Icons'
import LargeHeading from '../ui/LargeHeading'
import DocumentForm from './DocumentForm'

interface CreateDocProps {
  crewId: string
  type: string
}

const CreateDoc: FC<CreateDocProps> = ({ crewId, type }) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const addDoc = useStore((state) => state.addDoc)

  const methods = useForm({
    defaultValues: { crewId },
  })

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        size="sm"
        className="ml-4"
      >
        <Icons.PlusCircle className="w-5" />
      </Button>

      <Dialog open={open} setOpen={setOpen}>
        <LargeHeading className="mb-3" size="sm">
          Add New Document
        </LargeHeading>
        <Form
          methods={methods}
          onSubmit={async (values) => {
            await addDoc(values, type, router)
            methods.reset()
            setOpen(false)
          }}
          className="max-w-4xl space-y-3"
        >
          <DocumentForm edit withType />
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

export default CreateDoc
