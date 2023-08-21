import { Outlet } from 'react-router-dom'
import { Sidebar } from 'components/Sidebar/Sidebar'
import styles from './ApplicationLayout.module.scss'

export default function ApplicationLayout() {
  return (
    <div className={styles.application}>
      <div className={styles.side}>
        <Sidebar />
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
