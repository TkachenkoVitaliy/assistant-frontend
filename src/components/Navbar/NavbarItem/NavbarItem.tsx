import { NavLink, useMatch } from 'react-router-dom'
import styles from './NavbarItem.module.scss'

export interface NavbarItemProps {
  link: string
  label: string
}

export default function NavbarItem(props: NavbarItemProps) {
  const { link, label } = props
  const match = useMatch(link)

  return (
    <li
      className={
        match
          ? `${styles.navbaritem} ${styles.active}`
          : `${styles.navbaritem} ${styles.default}`
      }
    >
      <NavLink
        to={link}
        key={label}
      >
        {label}
      </NavLink>
    </li>
  )
}
