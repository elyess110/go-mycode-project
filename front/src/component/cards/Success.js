import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchpdf } from '../../redux/action/action'
import './pdf.css'
import DownloadIcon from '@mui/icons-material/Download';
import { border } from '@mui/system';

export default function Success() {
    const dispatch = useDispatch()
    useEffect(() => {
   //  dispatch(fetchpdf())
    }, [dispatch])
    
 const DownloadPdf = ()=>{
    dispatch(fetchpdf())
  }

  return (
    <div>
       <br/>
      <h2>Thanks for your order!</h2> <br/>
      <h5 style={{color :'black'}}>Your payment is successful.</h5> <br/>
      <h5 style={{color :'black'}}> 
        We appreciate your business! If you have any questions, please email us 
        at 
        <a href="mailto:orders@example.com">orders@example.com</a>. 
      </h5> <br/>
        <button className='butt1' style={{marginLeft:'700px' , marginTop:'50px' , backgroundColor:'green', border:'solid 1px #ffff' }}   onClick={DownloadPdf}><DownloadIcon/></button>

    </div>
  )
}
