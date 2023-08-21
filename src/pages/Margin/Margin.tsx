import FileForm from 'components/FileForm/FileForm'
import FileInput from 'components/FileInput/FileInput'

export default function Margin() {
  const fileNames = [
    'transitMonthly',
    'stockMonthly',
    'summaryMonthly',
    'transitAnnually',
    'stockAnnually',
    'summaryAnnually',
  ]

  return (
    <div>
      <FileForm fileNames={fileNames} />
    </div>
  )
}
