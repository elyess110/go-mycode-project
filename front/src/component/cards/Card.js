//import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
//import { del } from '../../redux/action/actionpost'
import './card.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Card({search}) {
 //const dispatch = useDispatch()
 
  
  const data = useSelector((state)=>state.reducer.prod)
console.log(data)
  return (
    <div >
      
    <div className='d-grid gap-5' style={{gridTemplateColumns:'470px 470px 470px'}}>
      {data?.filter((ev)=>ev?.title?.toLowerCase()?.includes(search?.toLowerCase()?.trim()))?.map((el)=>
       el.title?
        <div key={el._id}>
         <Nav.Link as={Link}to={ `/pdf/${el._id}`} >

        <div className="container" >
         <div className="movie-card">
           <div className="movie-header manOfSteel">
           <img className="movie-header manOfSteel" src={el.image} alt=''></img>
             <div className="header-icon-container">
             </div>
           </div>
           <div className="movie-lass">
             <div className="movie-content-header">
                 <h3 className="movie-title" >{el.title}</h3>
             </div>
             <div className="movie-info">
               <div className="info-section">
               {/* <button onClick={()=>dispatch(del(el._id))}>delete</button> */}
               </div>
              {/* <div style={{marginLeft:'250px'}}><ShoppingCartIcon/></div> */}
        
             </div>
           </div>
          
         </div>
      
       </div>
       </Nav.Link>
     </div>
     :null
     
      )}
    </div>
 
    </div>
  )
}
