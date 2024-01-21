import React from 'react'
import styles from './Quote.module.css';
import axios from 'axios';
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Quote = (props) => {

  let navigate = useNavigate()
  const showQuotehandler = (id)=>{
    navigate(`/quotes/${id}`);
  }

  const Deletehandler = async (id)=>{

    try {
        await axios.post(`https://backend-quote-app1.onrender.com/quotes/${id}?_method=DELETE`)
        navigate("/allquotes");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      
      <li className={styles.li_item}>
        <span>
             <span className={styles.index}>
              {props.index+1}.👌~~~~→💕~~~~~~→👌
             </span>
              <p> <RiSingleQuotesL/>{props.text}<RiSingleQuotesR/> </p>
             <h5>~~👨‍💼{props.author}</h5>
        </span>
        <div >
          <button className={styles.btn1} onClick={()=>showQuotehandler(props.id)} >View</button>
          <form onSubmit={(e)=>Deletehandler(props.id)} >
              <button className={styles.btn2}>Delete</button>
          </form>
        </div>
      </li>
    </>
  )
}

export default Quote;
