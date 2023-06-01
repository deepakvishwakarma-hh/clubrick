import axios from 'axios';
import { api } from '~/utils/api';
import { useState } from 'react';
import * as Yup from 'yup';
// form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { loginUserClientSide } from '~/features/authentication/services/login_user';
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';

// firebase
import { useRouter } from 'next/router';
import { createUser } from '~/features/authentication/services/register';
import { MuiTelInput } from 'mui-tel-input';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  phone: string;
  afterSubmit?: string;
};

export default function AuthRegisterForm() {
  const router = useRouter();
  const { mutate } = api.auth.register.useMutation();
  // const { register } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^\+91\s\d{5}\s\d{5}$/, 'Phone number must be in the format "+91 99101 22789"'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    setValue,
    register,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
      // let resp = await createUser(data);
      // loginUserClientSide({
      //   identifier: data.email as string,
      //   password: data.password,
      //   path: `${router.pathname}/?otpValidation=true&mobileNumber=${data.phone}`,
      // });
      //
      // mutate(data, {
      //   onError(error: any) {
      //     console.error('Mutation failed:', error?.message);
      //   },
      //   onSuccess(data1: any) {
      //     loginUserClientSide({
      //       identifier: data1.user.email as string,
      //       password: data1.password,
      //       path: `${router.pathname}/?otpValidation=true&mobileNumber=${data.phone}`,
      //     });
      //   },
      // });
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit) as any}>
      <Stack spacing={2.5}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>
        <Controller
          name="phone"
          control={control}
          rules={{ required: 'Phone number is required' }}
          render={({ field }) => (
            <MuiTelInput
              {...field}
              disableDropdown
              label="Phone Number"
              placeholder="+91 987654321"
              defaultCountry="IN"
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : null}
            />
          )}
        />
        {/* <RHFTextField type="number" name="phone" label="Phone Number" placeholder="+91 987654321" /> */}
        <RHFTextField type="email" name="email" label="Email" placeholder="example@gmail.com" />

        {/* <TextField
          type='number' name="Phone" label="Phone Number" placeholder='+91 987654321'
          onChange={(event) => {
            setNumber(event.target.value)
          }}

          value={number}
        /> */}

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div id="recaptcha-container" />

        <LoadingButton
          id="sign-in-button"
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          onClick={() => {
            // axios.get('https://www.fast2sms.com/dev/bulkV2?authorization=3ZA8rIBQjwYDGaXF6VvuTbpJNcPi45LqRMtCK7smEOxlH92UgSAwZRJKyosrGFhYCf1W72cMxBQdXjTt&variables_values=5599&route=otp&numbers=917354657459,8888888888,7777777777')
          }}
          loading={isSubmitting || isSubmitSuccessful}
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Register
        </LoadingButton>

        <div id="recaptcha" />
      </Stack>
    </FormProvider>
  );
}
