import React, { useEffect, useState } from 'react'
import styles from './NewQuotes.module.css'
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditQuotes = () => {
    const {id} = useParams();

    const [username, setUsername] = useState('');
    const [quote,setquote] = useState('');
  let navigate = useNavigate();
    

    const addQuoteHandler = async (e)=>{
        e.preventDefault();
        const author = username;
        const text = quote;
        // console.log(author)
        // console.log(text)
        try{
         
          await axios.post(`https://backend-quote-app1.onrender.com/quotes/${id}?_method=PATCH`,{author,text},{ withCredentials: true})
        //   console.log("hi");
         navigate(`/quotes/${id}`);
          
        }
        catch(e){
          console.log(e);
        }
    } 

    async function fetchQuotes() {
        let res = await axios.get(`https://backend-quote-app1.onrender.com/quotes/${id}`);
        let { author, text } = res.data;
        setUsername(author);
        setquote(text);
      }

    useEffect(() => {
        fetchQuotes();
        // eslint-disable-next-line
      }, []);

      const uernameChangehandler = (e)=>{
        setUsername(e.target.value)
      }

      const textChangehandler = (e)=>{
         setquote(e.target.value);
      }

  return (
    <>
      <div className={styles.int_box}>
        <div className={styles.new_quote}>
            <form onSubmit={addQuoteHandler} >
                <div>
                  <label htmlFor="author">Author:</label>
                  <input type="text" id='author' onChange={uernameChangehandler} value={username}  placeholder="Auther's Name" />
                </div>
                <div>
                  <label htmlFor="quotes">Quote:</label>
                  <textarea   value={quote} cols={15} rows={4} id='quotes' onChange={textChangehandler} placeholder="Auther's quotes" />
                </div>
                <button>Edit</button>
              </form>
        </div>
      </div>
    </>
  )
}

export default EditQuotes
