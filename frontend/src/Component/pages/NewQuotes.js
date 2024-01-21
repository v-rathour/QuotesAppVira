import React, { useRef } from 'react'
import styles from './NewQuotes.module.css'
import axios from 'axios';

const NewQuotes = () => {

  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

  
  const addQuoteHandler = async (e)=>{
      e.preventDefault();
      const author = usernameInputRef.current.value;
      const text = quoteInputRef.current.value;
      try{
       
        await axios.post('https://backend-quote-c5e5.onrender.com/addquotes',{author,text})
        window.location.href = '/allquotes';
        
      }
      catch(e){
        console.log(e);
      }
  }

  return (
    <>

      <div className={styles.int_box}>
        <div className={styles.new_quote}>
          <form onSubmit={addQuoteHandler} >
              <div>
                <label htmlFor="author">👨‍💼Author:</label>
                <input type="text" id='author' ref={usernameInputRef} placeholder="Auther's Name" />
              </div>
              <div>
                <label htmlFor="quotes">Quote:</label>
                <textarea  ref={quoteInputRef} cols={15} rows={6} id='quotes' placeholder="Auther's quotes" />
              </div>
              <button>Add Quote</button>
          </form>
        </div>
      </div>
       
    </>
  )
}

export default NewQuotes
