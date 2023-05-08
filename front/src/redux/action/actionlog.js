import axios from "axios";
import { FAIL, GET_CURRENT, LOG_IN, LOG_OUT, UPDATE, REGISTER,COMMENT,GETALL,UPDIMG } from '../actiontype/actiontypelog'
import { alert_error } from "./ErrorAction";


export const login = (data,navigate)=>async(dispatch)=>{
try {
    const res = await axios.post('http://localhost:4444/api/login',data)
    dispatch({
        type:LOG_IN,
        payload:res.data,
    })
    navigate("/Home")
} catch (error) {
    error.response.data.errors.forEach((el) => {
        dispatch(alert_error(el.msg));
      });
      dispatch({ type: FAIL, payload: error.response.data });
    }
}

export const register = (data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('http://localhost:4444/api/reg',data)
        dispatch({
            type:REGISTER,
            payload:res.data,
        })
        navigate("/Home")
    } catch (error) {
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
    }

    export const get= ()=>async(dispatch)=>{
        const config = {
         headers: {
             token: localStorage.getItem("token"),
           },
        }
         try {
             const res = await axios.get("http://localhost:4444/api/get",config)
             dispatch({
                 type:GET_CURRENT,
                 payload:res.data
             })
         } catch (error) {
             console.log(error)
         }
     }
     
        export const logout = ()=>(
           ({type:LOG_OUT})
        )
        export const update = (data,id)=>async(dispatch)=>{
            try {
              const res = await axios.put('http://localhost:4444/api/update/'+id,data)
              dispatch({type:UPDATE,payload:res.data})
          } catch (error) {
              console.log(error)
          }
          }
           export const comment = (data)=>async(dispatch)=>{
            try {
               const res = await axios.post('http://localhost:4444/api/comment',data)
               dispatch({type:COMMENT,payload:res.data})
           } catch (error) {
               console.log(error)
           }
           }
           export const getall = ()=>async(dispatch)=>{
            try {
               const res = await axios.get('http://localhost:4444/api/getuser')
               dispatch({type:GETALL,payload:res.data})
           } catch (error) {
               console.log(error)
           }
           }
           export const updimg = (id,data)=>async(dispatch)=>{
            try {
              const res = await axios.put('http://localhost:4444/api/updimg/'+id,data)
              dispatch({ type:UPDIMG,payload:res.data})
          } catch (error) {
              console.log(error)
          }
          }
           export const deluser = (id)=>async(dispatch)=>{
            try {
              const res = await axios.delete('http://localhost:4444/api/delete/'+id)
              dispatch(GET_CURRENT ())
          } catch (error) {
              console.log(error)
          }
          }
