import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './EmailForm.module.css';

function EmailForm(props) {
  const [email, setEmail] = useState('');
  const [loading,setLoading]=useState(false);
  const [emailSaved,setEmailSaved]=useState(0);
  // const storeUserEmail = async (email) => {
  //   setLoading(true)
  //   axios
  //     .post('http://localhost:3001/email', { email: email })
  //     .then((res) => {
  //       if (res.data === 'Email added!') {
  //         setLoading(false);
  //         setEmailSaved(1); // Email saved successfully
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       if (err.response.status === 409) {
  //         setEmailSaved(-1); // Email already exists
  //       } else {
  //         setEmailSaved(-2); // Other errors
  //       }
  //     });
  //     const json = await response.json()
  //     console.log(json)
  // };
  useEffect(() => {
    console.log(props.suscribeClick);
  }, [props.suscribeClick])
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // await storeUserEmail(email);
    const response = await fetch("http://localhost:5000/email",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:email})
    });
    const json =await response.json()
    if(!json.success){
      alert("Enter Valid mail");
    }
    setEmail('');
  };

  return (
    <div className={classes.emailOverlay}>
        {emailSaved===1?<div className={classes.suscriptionContent} style={{color:'#4ac96b'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <p>Yay! You are Suscribed Now</p>
        </div>:emailSaved===-2?<div className={classes.suscriptionContent} style={{color:'#ff0c01'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          <p>Error occured! Try Again Later</p>
        </div>:emailSaved===-1?<div className={classes.suscriptionContent} style={{color:'#ff0c01'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          <p>Email Already Saved!!</p>
        </div>:
        <div className={classes.suscriptionContent}>
            <form onSubmit={handleSubmit} className={classes.suscriptionContent}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                {loading?<button disabled>loading...</button>:<button type="submit">Submit</button>}
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>props.setSuscribeClick(false)} fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </form>
        </div>}

    </div>
  );
}

export {EmailForm};