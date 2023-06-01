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
import { initializeApp } from 'firebase/app';
// auth
import { Router, useRouter } from 'next/router';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { loginUserClientSide } from '~/features/authentication/services/login_user';
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useSession } from 'next-auth/react';
import { MuiTelInput } from 'mui-tel-input';
import { StringNullableChain } from 'lodash';

// firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCmu4Jz-V1mXXodrVJ7pMxs19U0FmfcFZw',
  authDomain: 'eccomerce-874e7.firebaseapp.com',
  projectId: 'eccomerce-874e7',
  storageBucket: 'eccomerce-874e7.appspot.com',
  messagingSenderId: '495863989442',
  appId: '1:495863989442:web:70b4da707cfa1ab97a675b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  phone: string;
  afterSubmit?: string;
};
function remove91FromString(str: string) {
  const result = str.replace(/^91/, '');
  return result;
}
export default function OtpValidation() {
  const { data: session } = useSession();
  const { mutate } = api.user.updateUser.useMutation();
  const router = useRouter();
  const [hasFilled, setHasFilled] = useState(false);
  const [phone, setPhone] = useState(
    `+91${remove91FromString(router.query.mobileNumber as string)}`
  );
  console.log({ phone });
  const [otp, setOtp] = useState('');

  const [loading, setLoading] = useState(false);

  const generateRecaptcha = () => {
    // @ts-ignore
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha',
      {
        size: 'invisible',
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

  const handleSendOtp = () => {
    setLoading(true);
    generateRecaptcha();
    // @ts-ignore
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
      .then((confirmationResult) => {
        console.log('Sms Send Confirmation', confirmationResult);
        // @ts-ignore
        window.confirmationResult = confirmationResult;

        setHasFilled(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const verifyOtp = () => {
    if (otp.length === 6) {
      setLoading(true);

      // @ts-ignore
      let confirmationResult = window?.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result: any) => {
          // User signed in successfully.
          setLoading(false);
          let user = result.user;
          console.log(user);
          mutate({ is_otp_verified: true });
          router.push('/home');
          // ...
        })
        .catch((error: any) => {
          setLoading(false);

          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };

  if (!hasFilled) {
    return (
      <Stack spacing={2.5}>
        <MuiTelInput value={phone} onChange={setPhone} />

        <LoadingButton
          id="sign-in-button"
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
          }}
        >
          Send OTP
        </LoadingButton>
        <div id="recaptcha" />
      </Stack>
    );
  }
  return (
    <Stack spacing={2.5}>
      <TextField
        value={otp}
        onChange={(event) => {
          setOtp(event.target.value);
        }}
        type="number"
        name="OTP"
        label="OTP"
        placeholder="OTP"
      />
      <LoadingButton
        id="sign-in-button"
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
