import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Navigate} from 'react-router-dom'
import { get } from '../../redux/action/actionlog'

export default function Privitrout({children}) {
    const token=localStorage.getItem("token")
    const[usertoken,setUsertoken]= useState('')
    const dispatch=useDispatch()
  useEffect(() => {
    dispatch(get())
  }, [dispatch])
  
    console.log(usertoken)
  return (
    <div>
      <div>
      {token? children:<Navigate to="/"/>}
    </div>
    </div>
  )
}
