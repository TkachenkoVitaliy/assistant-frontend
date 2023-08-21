import { navbarLinks } from 'config/pageConfig'
import NavbarItem from './NavbarItem/NavbarItem'

export default function Navbar() {
  const NAVBAR_LINKS = navbarLinks()
  console.log(NAVBAR_LINKS)

  return (
    <nav>
      <ul>
        {NAVBAR_LINKS.map((item) => (
          <NavbarItem
            link={item.link}
            label={item.label}
            key={item.label}
          />
        ))}
      </ul>
    </nav>
  )
}
