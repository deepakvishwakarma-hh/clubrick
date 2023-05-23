// @mui
import { useTheme } from '@mui/material/styles';
import Iconify from '~/components/iconify/Iconify';
import { Box, AppBar, Toolbar, Container, BoxProps, IconButton, Stack } from '@mui/material';
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
// import NavDesktop from './nav/desktop';
// ----------------------------------------------------------------------

import AccountPopover from '../dashboard/header/AccountPopover';

export default function Header() {
  const theme = useTheme();

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
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center', }}>
          <Sidebar isOffset={isOffset} data={[]} />
          <Logo sx={{ mr: 3 }} />

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            spacing={1}
            direction="row"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            sx={{
              mt: 0,
              mr: { xs: 2, md: 2 },
            }}
          >
            {isDesktop && (
              <IconButton sx={{ color: 'white' }}>
                <Iconify width={25} icon="mingcute:search-3-line" />
              </IconButton>
            )}


            <IconButton sx={{ color: 'white' }}>
              <Iconify width={25} icon="ph:shopping-cart-simple-bold" />
            </IconButton>
          </Stack>


          {isDesktop && <AccountPopover />}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar >
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
