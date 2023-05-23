import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { Box, Link, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------
export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 120,
          height: 30,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >

        <Image src="/logo/clubrick.png" alt="logo" width={120} height={30} />

      </Box >
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={NextLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
