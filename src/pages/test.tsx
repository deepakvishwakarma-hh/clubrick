import React from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase.config"

const Test = () => {




    const handleOtp = () => {
        const phoneNumber = '+917354657459'
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, true)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });

    }



    return (
        <div>

            <button type='button' onClick={handleOtp}> send otp   </button>

            <div className='recaptcha-container'></div>

        </div>



    )
}

export default Test