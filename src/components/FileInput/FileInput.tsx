import React, { useState } from 'react'
import styles from './FileInput.module.scss'

export interface FileInputProps {
  initState: File | null
  name: string
  onChange: (file: File | null, name: string) => void
}

export default function FileInput({
  initState,
  name,
  onChange,
}: FileInputProps) {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = React.useState<boolean>(false)
  const domId = `input${name}`

  function onFileUpload(uploadedFile: File | null) {
    setFile(uploadedFile)
    onChange(uploadedFile, name)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFile = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null
    onFileUpload(uploadedFile)
  }

  function handleDrag(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true)
    } else if (event.type === 'dragleave') {
      setDragActive(false)
    }
  }

  function hadleDrop(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    event.stopPropagation()
    setDragActive(false)
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      onFileUpload(event.dataTransfer.files[0])
    }
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
    >
      <input
        type="file"
        id={domId}
        onChange={handleChange}
        className={styles.inputFileUpload}
      />
      <label
        htmlFor={domId}
        className={
          dragActive
            ? `${styles.labelFileUpload} ${styles.dragActive}`
            : styles.labelFileUpload
        }
        onDrop={hadleDrop}
      >
        <div>
          <p>{name}</p>
        </div>
        {file ? <div>{file.name}</div> : null}
      </label>
    </div>
    // <>
    //   <h3>{name}</h3>
    //   <input
    //     type="file"
    //     name={name}
    //     onChange={handleChange}
    //   />
    // </>
  )
}
