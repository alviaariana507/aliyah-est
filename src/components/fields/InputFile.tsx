import Image from 'next/image'
import { FC, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useController, useFormContext } from 'react-hook-form'
import Paragraph from '../ui/Paragraph'

interface InputFileProps {
  name: string
  label?: string
  className?: string
}

const InputFile: FC<InputFileProps> = ({ name, label, className }) => {
  const [preview, setPreview] = useState<string>()

  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext()

  const { field } = useController({ name, control })

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setPreview(URL.createObjectURL(acceptedFiles[0]))
      field.onChange(acceptedFiles)
    },
  })

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name}>
          <Paragraph size="sm">{label}</Paragraph>
        </label>
      )}
      <div {...getRootProps({ className: 'dropzone' })} className={className}>
        <input {...getInputProps()} name={name} disabled={isSubmitting} />
        {preview ? (
          <Image src={preview!} alt={name} className="object-cover" fill />
        ) : (
          <span className="text-xs font-semibold text-gray-300">Drop Here</span>
        )}
      </div>
      <span className="text-[10px] text-red-500">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  )
}

export default InputFile
