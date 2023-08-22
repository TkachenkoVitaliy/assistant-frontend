import FileInput from 'components/FileInput/FileInput'
import { useCallback, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import { FileNames } from 'pages/Margin/Margin'
import styles from './FileForm.module.scss'

interface FileFormProps {
  fileNames: Array<FileNames>
}

export default function FileForm({ fileNames }: FileFormProps) {
  console.log('RENDER FORM')
  const [files, setFiles] = useState<Record<string, File | null>>(
    Object.fromEntries(
      fileNames.map((fileName: FileNames) => [fileName.backendName, null])
    )
  )
  const [disabled, setDisabled] = useState<boolean>(true)

  const isAllFilesUploaded = (currentFiles: Record<string, File | null>) => {
    return Object.entries(currentFiles).every((entry) => entry[1] !== null)
  }

  const handleInputChange = useCallback(
    (file: File | null, fileName: string) => {
      const newFiles = { ...files }
      newFiles[fileName] = file
      setFiles(newFiles)
      setDisabled(!isAllFilesUploaded(newFiles))
    },
    [files]
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const url = 'http://localhost:8089/api/v1/margin'
    const formData = new FormData()
    Object.entries(files).forEach((entry) => {
      if (entry[1] !== null) {
        formData.append(entry[0], entry[1])
      }
    })

    const config: AxiosRequestConfig = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      responseType: 'blob',
    }

    axios.post(url, formData, config).then((response) => {
      console.log(response)

      const downloadedFileName = response.headers.filename

      const fileUrl = window.URL.createObjectURL(response.data)
      const fileLink = document.createElement('a')
      fileLink.href = fileUrl
      fileLink.setAttribute('download', downloadedFileName)
      document.body.appendChild(fileLink)
      fileLink.click()

      setFiles(
        Object.fromEntries(
          fileNames.map((fileName: FileNames) => [fileName.backendName, null])
        )
      )
      setDisabled(true)
    })
  }

  return (
    <form
      className={styles.fileForm}
      onSubmit={handleSubmit}
    >
      {fileNames.map((fileName) => (
        <FileInput
          key={fileName.backendName}
          state={files[fileName.backendName]}
          fieldName={fileName.backendName}
          name={fileName.uiName}
          onChange={handleInputChange}
        />
      ))}
      <button
        disabled={disabled}
        className={styles.sendBtn}
        type="submit"
        aria-label="Send"
        id="send_btn"
      >
        Сформировать отчет
      </button>
    </form>
  )
}
