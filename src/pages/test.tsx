import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmu4Jz-V1mXXodrVJ7pMxs19U0FmfcFZw",
  authDomain: "eccomerce-874e7.firebaseapp.com",
  projectId: "eccomerce-874e7",
  storageBucket: "eccomerce-874e7.appspot.com",
  messagingSenderId: "495863989442",
  appId: "1:495863989442:web:70b4da707cfa1ab97a675b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
// Import the functions you need from the SDKs you need

const App = () => {

  const [phone, setPhone] = useState('+918766203976');
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState('');

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      }
    }, auth);
  }

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        console.log("Sms Send Confirmation", confirmationResult)
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  }
  
  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verifu otp
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        let user = result.user;
        console.log(user);
        alert('User signed in successfully');
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert('User couldn\'t sign in (bad verification code?)');
      });
    }
  }

  if(!hasFilled){
    return (
      <div className='app__container'>
        <Card sx={{ width: '300px'}}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography sx={{ padding: '20px'}} variant='h5' component='div'>Enter your phone number</Typography>
            <form onSubmit={handleSend}>
              <TextField sx={{ width: '240px'}} variant='outlined' autoComplete='off' label='Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} />
              <Button type='submit' variant='contained' sx={{ width: '240px', marginTop: '20px'}}>Send Code</Button>
            </form>
          </CardContent>
        </Card>
        <div id="recaptcha"></div>
      </div>
    ) 
  } else {
    return (
      <div className='app__container'>
        <Card sx={{ width: '300px'}}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography sx={{ padding: '20px'}} variant='h5' component='div'>Enter the OTP</Typography>
              <TextField sx={{ width: '240px'}} variant='outlined' label='OTP ' value={otp} onChange={verifyOtp} />
          </CardContent>
        </Card>
        <div id="recaptcha"></div>
      </div>
    )
  }
}

export default App;