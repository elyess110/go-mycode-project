import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { get } from '../../redux/action/actionlog'
import { gett } from '../../redux/action/actionpost'
import Card from '../cards/Card'
//import Example from '../cards/Modal'
import './nav.css'
import Navbar from './Navbar'

export default function Home() {
  const dispatch=useDispatch()

  const [search,setSearch]=useState('')

  useEffect(() => {
    dispatch(get())
    dispatch(gett())
  }, [dispatch])


  return (
    <div> 
      <Navbar/>
      <div>
        <div className='abc'>
     <section className="container section-1">
      <div className="slogan">
        <h1 className="company-title">This is a website for cinema </h1>
        <h2 className="company-slogan">
        It's a digital platform for shoping movie tecket 
        </h2>
      </div>
      <div className="home-cinema-container">
        <img
          className="home-cinema"
          src="http://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/plv0ibk9gm7eim9yjfpi"
          alt=""
        />
      </div>
    </section>
    </div><br/><br/><br/>
    <h5> You can buy a ticket here</h5>
    <br/>
   <input type="text" required="" className='search' placeholder="  Search " onChange={(event)=>{setSearch(event.target.value)}}/>
    {/* <Example/> */}
    
    <Card search={search}/>
    <br/><br/><br/>
    <div className='footer'>
      <a className='facebook' href='https://www.facebook.com/gomycode'><img className='fac' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/2048px-Facebook_icon_%28black%29.svg.png' alt=''></img></a>
      <a className='facebook' href='https://www.instagram.com/gomycode/'><img className='fac' src='https://www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-glyph-black-white-large-png.png' alt=''></img></a>
      <a className='facebook' href='https://twitter.com/gomycode'><img className='fac' src='https://icon-library.com/images/black-twitter-icon-transparent-background/black-twitter-icon-transparent-background-6.jpg' alt=''></img></a>
    </div>
    </div> -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
    </div>
  )
}
