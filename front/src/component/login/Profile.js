import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './style0.css'
import { get , updimg} from '../../redux/action/actionlog'
import Navbar from '../navbar/Navbar'
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios'


export default function Profile() {
    const dispatch=useDispatch()
  useEffect(() => {
    dispatch(get())
  }, [dispatch])
  const user = useSelector((state)=>state.reducer.user)
  const [firstName,setFirstName] = useState(user.firstName)
  const [lastName,setLastName] = useState(user.lastName)
  const [email,setEmail]=useState(user.email)
  const [password,setPassword]=useState(user.password)
  const [commit,setCommit] =useState(user.commit)
  const [profilepic,setProfilepic] = useState([])

  

  const getimg=(async()=>{
    var cloud = {}
    const formaData=new FormData()
    formaData.append('file',profilepic)
    formaData.append('upload_preset','newcloud')
    await axios.post('https://api.cloudinary.com/v1_1/dzdidywni/upload',formaData).then((res)=>
    {console.log(res.data.url)
       cloud={
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        commit:commit,
        profilepic:res.data.url
       }
    })
    dispatch(updimg(user._id,cloud))

  })
  
 
  console.log(user)
  return (
    <div className='sa'>
      <Navbar/>
  <div className="portfoliocard">
    <div className="coverphoto" ></div>
    <div className="profile_picture" >
    <img className='imgr' src={user?.profilepic} width='50px' height='50px' alt=''></img>
    </div>
    <div className="left_col">
    <input type='file' className='inprofil' accept='image/*,.mp4' onChange={(e)=> setProfilepic(e.target.files[0])} /><br/><br/>
 <button className='butprfil' onClick={getimg}>changer</button>
    </div>
    <div className="right_col">
      <br/>
      <h4 className="t"><PersonIcon/>  {user?.firstName}</h4>
      <h4 className="t"><PersonOutlineIcon/>  {user?.lastName}</h4>
      <h4 className="t"><EmailIcon/> {user?.email}</h4>
    </div>
  </div>


    </div>
  )
}
