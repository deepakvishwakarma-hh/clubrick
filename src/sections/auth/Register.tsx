import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthWithSocial from './AuthWithSocial';
import AuthRegisterForm from './AuthRegisterForm';
import OtpValidation from './OtpValidation';
import { useRouter } from 'next/router';



// ----------------------------------------------------------------------

export default function Register() {
  const router = useRouter()

  const [registerState, setState] = useState(false)


  return (
    <LoginLayout title="Manage the job more effectively with Minimal">
      <Stack spacing={2} sx={{ mb: 2, position: 'relative' }}>
        <Typography variant="h4">Register </Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2"> Get access to your Orders, Wishlist and Recommendations </Typography>
        </Stack>
      </Stack>

      {router.query.otpValidation ? <OtpValidation /> : <AuthRegisterForm />}

      <Typography
        component="div"
        sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}
      >
        {'By signing up, I agree to '}
        <Link underline="always" color="text.primary">
          Terms of Service
        </Link>
        {' and '}
        <Link underline="always" color="text.primary">
          Privacy Policy
        </Link>
        .
      </Typography>

    </LoginLayout>
  );
}
