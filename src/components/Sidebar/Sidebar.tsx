import styles from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>ASSISTANT</div>
      <nav className={styles.sidebar_navbar}>Navbar</nav>
      <div className={styles.sidebar_footer}>Sidebar Footer</div>
    </aside>
  )
}
