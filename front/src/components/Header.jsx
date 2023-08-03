import { useNavigate, useLocation } from "react-router-dom";

const Header = (props) => {

  const navigate = useNavigate()
  const location = useLocation()

  const listStyle = 'hover:text-blue-500'

  const hiddenBoxStyle = 'hidden'
  const boxStyle = 'absolute top-0 w-full flex justify-between text-white'
  return (
    <header className={location.pathname === '/' ? boxStyle : hiddenBoxStyle}>
      <div>
        <a href='/'><h1>Personal Blog</h1></a>
      </div>
      <ul className="flex flex-row gap-2">
        <li><a href='/' className={listStyle}>Home</a></li>
        <li><a href='/dashboard' className={listStyle}>Dashboard</a></li>
        <li><a href='/account/login' className={listStyle}>Login</a></li>
      </ul>
    </header>
  )
}
export default Header;