import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "../Quote/Quote";
import styles from "../Quote/Quote.module.css";
import { DiAtom } from "react-icons/di";

export default function AllQuotes(props) {
  let [quotes, setQuotes] = useState([]);
  let [msg, setmassage] = useState("");

  async function getQuotes() {
    try {
      let res = await axios.get("https://backend-quote-c5e5.onrender.com/allquotes",
        {
          withCredentials: true,
        }
      );
      // console.log(res)
      setQuotes(res.data.allQuotes);
      // refreshpage();
    } catch (e) {
      setmassage(e.response.data.message);
    }
  }

  // const refreshpage = ()=>{
  //   window.location.href = '/allquotes'
  // }

  

  useEffect(() => {
    console.log(msg);
    getQuotes();
    // eslint-disable-next-line
  }, []);

  const clickHandler = ()=>{
    localStorage.setItem("mes","");
  }

  return (
    <>
      <h2 className={styles.Main_head}>
        <DiAtom />
        AllQoutes
      </h2>
      <div className=" mt-3 mx-auto">
        {msg && msg.length ? (
          <div className=" alert alert-warning alert-dismissible fade show">
            <strong>{msg}!</strong>
            <button
              type="button"
              className="btn-close"
              onClick={clickHandler}
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
           
        ) : (
          ""
        )}
      </div>
      <ul>
        {quotes.map((quote, index) => {
          return (
            <Quote
              key={quote._id}
              author={quote.author}
              text={quote.text}
              id={quote._id}
              index={index}
            />
          );
        })}
      </ul>
    </>
  );
}
