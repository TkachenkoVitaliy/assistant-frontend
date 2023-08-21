import FileForm from 'components/FileForm/FileForm'
import FileInput from 'components/FileInput/FileInput'

export interface FileNames {
  backendName: string
  uiName: string
}

export default function Margin() {
  const fileNames: FileNames[] = [
    {
      backendName: 'transitMonthly',
      uiName: 'Тразит - помесячно',
    },
    {
      backendName: 'stockMonthly',
      uiName: 'Склад - помесячно',
    },
    {
      backendName: 'summaryMonthly',
      uiName: 'Все продажи - помесячно',
    },
    {
      backendName: 'transitAnnually',
      uiName: 'Транзит - за весь период',
    },
    {
      backendName: 'stockAnnually',
      uiName: 'Склад - за весь период',
    },
    {
      backendName: 'summaryAnnually',
      uiName: 'Все продажи - за весь период',
    },
  ]

  return (
    <div>
      <FileForm fileNames={fileNames} />
    </div>
  )
}
