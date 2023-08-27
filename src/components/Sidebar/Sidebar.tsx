import Navbar from 'components/Navbar/Navbar'
import styles from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>ELENA ASSISTANT</div>
      <nav className={styles.sidebar_navbar}>
        <Navbar />
      </nav>
    </aside>
  )
}
