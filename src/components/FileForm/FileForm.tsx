import FileInput from 'components/FileInput/FileInput'
import { useState } from 'react'

interface FileFormProps {
  fileNames: Array<string>
}

export default function FileForm({ fileNames }: FileFormProps) {
  const [files, setFiles] = useState<Record<string, File | null>>(
    Object.fromEntries(fileNames.map((fileName: string) => [fileName, null]))
  )

  const handleInputChange = (file: File | null, fileName: string) => {
    const newFiles = { fileName: file, ...files }
    setFiles(newFiles)
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      {fileNames.map((fileName) => (
        <FileInput
          key={fileName}
          name={fileName}
          onChange={handleInputChange}
        />
      ))}
    </form>
  )
}
