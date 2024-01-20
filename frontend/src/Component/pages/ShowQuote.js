import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import styles from "./ShowQuote.module.css";
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";

const ShowQuote = () => {
  let navigate = useNavigate()
  const params = useParams();
  const [quote, setQuote] = useState({
    author: "",
    text: "",
  });

  async function fetchQuotes() {
    let res = await axios.get(`http://localhost:8080/quotes/${params.id}`);
    let { author, text } = res.data;
    setQuote({ author, text });
  }

  useEffect(() => {
    fetchQuotes();
    // eslint-disable-next-line
  }, []);

  const Onclickhandler = () => {
    navigate("/allquotes");
  };

  const QuotesEdithandler = () => {
    navigate(`/quotes/${params.id}/edit`);
  };

  return (
    <>
      <div className={styles.show_quote}>
        <div className={styles.view_box}>
          <span className={styles.deco}>👌~~~~→💕~~~~→👌~~~~~→✨</span>
          <p>
            {" "}
            <RiSingleQuotesL />
            {quote.text}
            <RiSingleQuotesR />{" "}
          </p>
          <h2> ~👨‍💼{quote.author}</h2>
          <button className={styles.btn1} onClick={Onclickhandler}>
            Go to Back
          </button>
          <button className={styles.btn2} onClick={QuotesEdithandler}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowQuote;
