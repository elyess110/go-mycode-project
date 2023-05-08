import axios from "axios"
import { POST_DATA,GET_DATA,POSTSEAT } from "../actiontype/actiontype"
import { saveAs } from "file-saver"

export const createpdf = (data)=>async(dispatch)=>{
    console.log(data)
    try {
        const res =  await axios.post('http://localhost:4444/api/createpdf/', data)
        dispatch ({
            type:POST_DATA,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const fetchpdf = ()=>async(dispatch)=>{
        const res = await axios.get('http://localhost:4444/api/fetchpdf',{ responseType: 'blob' })
        .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
        dispatch ({type:GET_DATA,
                   payload:res.data    
        } )
    }
    export const postseat = (data)=>async(dispatch)=>{
        try {
           const res = await axios.post('http://localhost:4444/api/postseat/',data)
           dispatch({type:POSTSEAT,
                     payload:res.data
        })
       } catch (error) {
           console.log(error)
       }
       }
       export const getseat = ()=>async(dispatch)=>{
        try {
           const res = await axios.get('http://localhost:4444/api/getseat')
           dispatch(postseat())
       } catch (error) {
           console.log(error)
       }
       }