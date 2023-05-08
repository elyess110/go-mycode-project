import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createpdf, fetchpdf } from "../../redux/action/action";
import { geto, gett } from "../../redux/action/actionpost";
import { loadStripe } from "@stripe/stripe-js";
import "./pdf.css";
import Seat from "./seat";
import MovieIcon from "@mui/icons-material/Movie";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MoneyIcon from "@mui/icons-material/Money";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Navbar from "../navbar/Navbar";
//import { gett } from '../../redux/action/actionpost';

export default function Pdf() {
  const [choix, setChoix] = useState("");
  const [select, setSelect] = useState("");

  const dispatch = useDispatch();
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf("/") + 1);
  useEffect(() => {
    //dispatch(gett())
    dispatch(geto(id));
  }, [dispatch]);

  const [product, setProduct] = useState(10);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51MqfeeBdTBk43k58MDXQSm6qnuQOfmWCHRBeHMmCVUvn67sc0i3eJ95opXBXu7RO5cSBJaxTut7fHb9zLRFrdiyW00RoOiw2BC"
    );
    const body = { product };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:4444/api/checkstripe", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    console.log(response);
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  console.log(choix);

  const data = useSelector((state) => state.reducer.film);

  //const [date,setDate] = useState('1/4/2023')
  const [price, setPrice] = useState(10);
  const [seat, setSeat] = useState(0);
  //const [time,setTime] = useState('12:15')

  const handlechange = (e) => setPrice(e.target.value);
  const add2 = () => setPrice(12);
  const add4 = () => {
    setPrice(14);
  };

  const createPdf = () => {
    dispatch(
      createpdf({
        title: data.title,
        image: data.image,
        seat,
        price,
        time: select,
        date: choix,
      })
    );
    makePayment();
  };

  // const DownloadPdf = ()=>{
  //   dispatch(fetchpdf())
  // }
  return (
    <div className="headpdf">
      <Navbar />
      <div className="se">
        <br />
        <br />
        <br />
        <br />
        <br />

        <h2 className="titlemovie">
          <MovieIcon /> MOVIE: {data?.title}
        </h2>
        <img className="imgmo" src={data?.image} alt=""></img>
        <div className="onch">
          <div className="onchange">
            <div className="movie-hahah">
              <label>
                <MoneyIcon />
              </label>
              <select id="movie" onChange={handlechange}>
                <option value={10}>just ticket {data?.price} DT</option>
                <option value={12} onChange={add2}>
                  with popcorn {data?.price + 2} DT
                </option>
                <option value={14} onChange={add4}>
                  with popcorn and soda {data?.price + 4} DT
                </option>
              </select>
            </div>
            <div className="movie-hahah">
              <label>
                {" "}
                <CalendarMonthIcon />
              </label>
              <select id="movie" onChange={(e) => setChoix(e.target.value)}>
                <option>{data?.date1}</option>
                <option> {data?.date2}</option>
                <option> {data?.date3}</option>
              </select>
            </div>
            <div className="movie-hahah">
              <label>
                {" "}
                <AccessTimeFilledIcon />
              </label>
              <select id="movie" onChange={(e) => setSelect(e.target.value)}>
                <option>{data?.time1}</option>
                <option>{data?.time2} </option>
                <option>{data?.time3} </option>
              </select>
            </div>
          </div>
        </div>

        <ul className="lalal">
          <li>
            <div className="seat selected ma" />
            <small>you can select</small>
          </li>
          <li>
            <div className="seat selected" />
            <small>Selected</small>
          </li>
        </ul>
        <Seat setSeat={setSeat} />
        <button className="butt1" onClick={createPdf}>
          confirm <ConfirmationNumberIcon />
        </button>
        {/* <button className='butt1' onClick={DownloadPdf}>DownloadPdf</button> */}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
