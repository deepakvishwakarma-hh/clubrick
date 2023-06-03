import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';
import { NAV } from '~/config-global';
import Iconify from '~/components/iconify';
import Scrollbar from '~/components/scrollbar';
import { NavSectionVertical } from '~/components/nav-section';
import { NavProps } from '~/layouts/main/nav/types';
import useResponsive from '~/hooks/useResponsive';
import NAV_ITEMS, { mobileConfig } from './config-navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { List, Drawer, IconButton, Typography, Button } from '@mui/material';
// ----------------------------------------------------------------------

export default function Sidebar({ isOffset, data }: NavProps) {
    const session = useSession()
    const { pathname } = useRouter();
    const [open, setOpen] = useState(false);
    const isDesktop = useResponsive('up', 'md');
    const isUserAuthenticated = session.status === 'authenticated'

    useEffect(() => {
        if (open) {
            handleClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    mr: 1,
                    ...(isOffset && {
                        color: 'white',
                    }),
                }}
            >
                <Iconify width={30} color="white" icon="eva:menu-2-fill" />
            </IconButton>

            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        pb: 5,
                        width: NAV.W_BASE,
                    },
                }}
            >
                <Scrollbar>

                    <Box sx={{
                        background: (theme) => theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 1.5
                    }}>

                        <Button disabled={isUserAuthenticated} href='/auth/login' LinkComponent={Link}>
                            <Typography ml={4} sx={{ color: (t) => t.palette.common.white }} variant='h6'>Hello, {isUserAuthenticated ? 'username' : 'Sign In'}</Typography>
                        </Button>

                        <IconButton
                            onClick={handleClose}
                            sx={{
                                mr: 1,
                            }}>
                            <Iconify width={25} color="white" icon="iconamoon:close" />
                        </IconButton>
                    </Box>

                    <List component="nav" disablePadding>
                        <NavSectionVertical
                            data={isDesktop ? NAV_ITEMS : [mobileConfig, ...NAV_ITEMS,]}
                            sx={{
                                borderRadius: 2,
                                mt: isDesktop ? 0 : 2,
                                bgcolor: 'background.paper',
                                boxShadow: (theme) => theme.customShadows.z24,
                            }}
                        />
                    </List>
                </Scrollbar>
            </Drawer>
        </>
    );
}


