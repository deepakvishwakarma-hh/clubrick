
import axios from 'axios';
import { api } from '~/utils/api';
import { useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { initializeApp } from "firebase/app";
// auth
import { useRouter } from 'next/router';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { loginUserClientSide } from '~/features/authentication/services/login_user';
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';


// firebase 
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

// ----------------------------------------------------------------------

type FormValuesProps = {
    email: string;
    password: string;
    firstName: string;
    lastName?: string;
    phone: string;
    afterSubmit?: string;
};

export default function OtpValidation() {
    const router = useRouter()
    const [hasFilled, setHasFilled] = useState(false);
    const [otp, setOtp] = useState('');

    const [loading, setLoading] = useState(false)




    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': (response: any) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            }
        }, auth);
    }



    const handleSendOtp = () => {
        setLoading(true)
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+${router.query.mobileNumber}`, appVerifier)
            .then((confirmationResult) => {
                console.log("Sms Send Confirmation", confirmationResult)
                window.confirmationResult = confirmationResult;
                setHasFilled(true)
                setLoading(false)


            }).catch((error) => {
                console.log(error);
                setLoading(false)
            });
    }

    const verifyOtp = () => {
        if (otp.length === 6) {
            setLoading(true)

            // verifu otp
            let confirmationResult = window?.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                setLoading(false)
                let user = result.user;
                console.log(user);
                alert('User signed in successfully');
                // ...
            }).catch((error) => {
                setLoading(false)

                // User couldn't sign in (bad verification code?)
                // ...
                alert('User couldn\'t sign in (bad verification code?)');
            });
        }
    }


    if (!hasFilled) {
        return (
            <Stack spacing={2.5}>
                <TextField aria-readonly value={router.query.mobileNumber} type='number' name="mobile" label="Mobile" placeholder='Mobile' />

                <LoadingButton
                    id='sign-in-button'
                    fullWidth
                    color="inherit"
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleSendOtp}
                    loading={loading}
                    sx={{
                        bgcolor: 'text.primary',
                        color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                        '&:hover': {
                            bgcolor: 'text.primary',
                            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                        },
                    }}>
                    Send OTP
                </LoadingButton>
                <div id="recaptcha" />
            </Stack>
        )
    }
    return (
        <Stack spacing={2.5}>
            <TextField value={otp} onChange={(event) => { setOtp(event.target.value) }} type='number' name="OTP" label="OTP" placeholder='OTP' />
            <LoadingButton
                id='sign-in-button'
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                onClick={verifyOtp}
                loading={false}
                sx={{
                    bgcolor: 'text.primary',
                    color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                    '&:hover': {
                        bgcolor: 'text.primary',
                        color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                    },
                }}
            >
                Varify OTP
            </LoadingButton>

            <div id="recaptcha" />

        </Stack>
    );
}





