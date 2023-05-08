import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import './comment.css'
import { useEffect, useState } from 'react'
import {  get, getall, update } from '../../redux/action/actionlog'
 import SendIcon from '@mui/icons-material/Send';
 //import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Contact() {

  const dispatch=useDispatch()
  const [commit,setCommit] =useState('')
  //const [like,setLike] =useState(0)
 
  useEffect(() => {
    dispatch(getall())
    dispatch(get())
  }, [dispatch])

  // const addlike = () =>{
  // setLike((like===0)? like+1: 0)
  // }

  const user = useSelector((state)=>state.reducer.user)
  const users = useSelector((state)=>state.reducer.users)
  console.log(user ,'ùmlkjhgfd')
  console.log(users,'hello')

  const hadcom = () =>{dispatch(update({commit:[...user.commit,{commit:commit}]},user._id))
  window.location.reload(false);
}
console.log(commit)

  return (
    <div >
      <Navbar/><br/><br/><br/><br/><br/><br/>
      <form className='form'>
  <div className="tttt">
<input type="text" required="" className='popo' placeholder="comment " onChange={(e)=>setCommit(e.target.value)}/>
  </div>
</form>
  <button className='click' onClick={hadcom}><SendIcon/></button>

{users?.map((e)=>
  e.firstName?
  e.commit.map((el)=>
<div class="comments-container">
      <ul id="comments-list" className="comments-list">
  <li>
    <div className="comment-main-level">
      <div className="comment-avatar">
        <img
          src={e?.profilepic}
          alt=""
        />
      </div>

       <div className="comment-box">
        <div className="comment-head">
          <h6 className="comment-name by-author">
            <h6 >{e?.firstName} {e?.lastName}</h6>
          </h6>
          <span></span>
          <i className="fa fa-reply" />
          <i className="fa fa-heart" />
        </div>
        <div className="comment-content">
       {el.commit}
       {/* <button onClick={()=>dispatch(deluser(e._id))}>delete</button> */}
        </div>
        <div className='back1'>
        {/* <button className='like' onClick={addlike}>{like} <FavoriteBorderIcon/></button> */}
        </div>
      </div>
    </div>
  </li>
</ul>
 </div>
 ):null)}
    </div>
  )
}
