import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import SideBar from './SideBar'

import './Header.css'

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <SideBar />
    </header>
  )
}

export default Header