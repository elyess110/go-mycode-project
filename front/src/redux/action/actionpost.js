import axios from "axios";
import { GET_BASE,GETONE } from "../actiontype/actiontypepost";

export const gett = ()=>async(dispatch)=>{
    try {
       const res = await axios.get('http://localhost:4444/api/getnew')
       dispatch({
        type:GET_BASE,
        payload:res.data
    })
   } catch (error) {
       console.log(error)
   }
   }
export const add = (data)=>async(dispatch)=>{
 try {
    const res = await axios.post('http://localhost:4444/api/addnew',data)
    dispatch(gett ())
} catch (error) {
    console.log(error)
}
}
   export const del = (id)=>async(dispatch)=>{
     try {
       const res = await axios.delete('http://localhost:4444/api/deletenew/'+id)
       dispatch(gett ())
   } catch (error) {
       console.log(error)
   }
   }
   export const update = (data,id)=>async(dispatch)=>{
    try {
      const res = await axios.put('http://localhost:4444/api/upnew'+id,data)
      dispatch(gett ())
  } catch (error) {
      console.log(error)
  }
  }
  export const geto = (id)=>async(dispatch)=>{
    try {
       const res = await axios.get('http://localhost:4444/api/getone/'+id)
       console.log(res.data)
       dispatch({
        type:GETONE,
        payload:res.data
       })
   } catch (error) {
       console.log(error)
   }
   }
  