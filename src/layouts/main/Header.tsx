// @mui
import { useTheme } from '@mui/material/styles';
import Iconify from '~/components/iconify/Iconify';
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  BoxProps,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
// hooks
import Sidebar from '~/components/__new/sidebar';
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// components
import Logo from '../../components/logo';
//
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Search from '~/components/__new/home-search';

import AccountPopover from '../dashboard/header/AccountPopover';

export default function Header() {
  const { data: session } = useSession();
  const theme = useTheme();
  // const session = useSession();
  const isDesktop = useResponsive('up', 'md');
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <AppBar color="transparent" sx={{ boxShadow: 1, background: theme.palette.primary.main }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.primary.main }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Sidebar isOffset={isOffset} data={[]} />
          <Logo sx={{ mr: 3 }} />

          <Box sx={{ flexGrow: 1, background: '' }}>{isDesktop && <Search />}</Box>

          <Stack
            spacing={1}
            direction="row"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            sx={{
              mt: 0,
              mx: { xs: 2, md: 2 },
            }}
          >
            {!isDesktop && (
              <IconButton LinkComponent={Link} href="/searchsuggestion" sx={{ color: 'white' }}>
                <Iconify width={25} icon="mingcute:search-3-line" />
              </IconButton>
            )}

            <IconButton LinkComponent={Link} href="/cheakout" sx={{ color: 'white' }}>
              <Iconify width={25} icon="ph:shopping-cart-simple-bold" />
            </IconButton>
          </Stack>

          {session?.user ? (
            isDesktop && <AccountPopover />
          ) : (
            <Button
              href="/auth/login"
              LinkComponent={Link}
              sx={{
                color: theme.palette.common.white,
                fontSize: theme.typography.h6,
              }}
            >
              Login
            </Button>
          )}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

function Shadow({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
