import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import './nav.css'
import { useDispatch, useSelector,  } from 'react-redux';
import { logout } from '../../redux/action/actionlog';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
  const dispatch = useDispatch()

  const user = useSelector((state)=>state.reducer.user)


const out = () =>{
  dispatch(logout(user?.token))
}
  
  return (
    <div>
      {/* className=' fixed-top ' */}
  <header  className=' fixed-top' >
    <div className="company-logo"><Nav.Link as={Link}to={'/Home'} >CRAZY cinema</Nav.Link></div>
    <nav className="navbar">
      
      <ul className="nav-items">
        <Nav.Link as={Link}to={'/Home'} className="nav-item" >HOME</Nav.Link>
        <Nav.Link as={Link}to={'/Profile'} className="nav-item">PROFILE</Nav.Link>
        <Nav.Link as={Link}to={'/Contact'} className="nav-item" >COMMENT</Nav.Link>
        <button className="logeout" onClick={out}><Nav.Link as={Link}to={'/'}  ><LogoutIcon/></Nav.Link></button>
      </ul>
    </nav>
    <div className="menu-toggle">
      <i className="bx bx-menu" />
      <i className="bx bx-x" />
    </div>
  </header>
 
    
    
    

    </div>
  )
}
