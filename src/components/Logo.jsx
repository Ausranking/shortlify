import { logo } from "../assets/images"
import { NavLink } from "react-router-dom"

const Logo = () => {
  return (
    <NavLink to ='/'>
      <img src={logo} alt="logo" className="w-20 "/>
    </NavLink>
  )
}

export default Logo
