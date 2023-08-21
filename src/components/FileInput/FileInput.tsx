import { useState } from 'react'

export interface FileInputProps {
  name: string
  onChange: (file: File | null, name: string) => void
}

export default function FileInput({ name, onChange }: FileInputProps) {
  const [file, setFile] = useState<File | null>(null)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFile = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null
    setFile(uploadedFile)
    onChange(uploadedFile, name)
  }

  return (
    <>
      <h3>{name}</h3>
      <input
        type="file"
        name={name}
        onChange={handleChange}
      />
    </>
  )
}
