import React, { useState } from 'react'
import styles from './FileInput.module.scss'

export interface FileInputProps {
  state: File | null
  fieldName: string
  name: string
  onChange: (file: File | null, name: string) => void
}

export default function FileInput({
  state,
  fieldName,
  name,
  onChange,
}: FileInputProps) {
  const [dragActive, setDragActive] = React.useState<boolean>(false)
  const domId = `input${fieldName}`

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFile = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null
    onChange(uploadedFile, fieldName)
  }

  function handleDrag(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true)
    } else if (event.type === 'dragleave') {
      setDragActive(false)
    }
  }

  function hadleDrop(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setDragActive(false)
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      onChange(event.dataTransfer.files[0], fieldName)
    }
  }

  return (
    <div>
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
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={hadleDrop}
      >
        <div className={styles.info_wrapper}>
          <div>
            <p>
              <b>{name}</b>
            </p>
          </div>
          {state?.name ? <p>{state.name}</p> : null}
        </div>
      </label>
    </div>
  )
}
