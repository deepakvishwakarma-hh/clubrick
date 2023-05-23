import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack } from '@mui/system';
import { List, Drawer, IconButton } from '@mui/material';
// config
import { NAV } from '~/config-global';
// components
import Logo from '~/components/logo';
import Iconify from '~/components/iconify';
import Scrollbar from '~/components/scrollbar';
import { NavSectionVertical } from '~/components/nav-section';
// types
import { NavProps } from '~/layouts/main/nav/types';
// config
import useResponsive from '~/hooks/useResponsive';
import NAV_ITEMS, { mobileConfig } from './config-navigation';
// ----------------------------------------------------------------------

export default function Sidebar({ isOffset, data }: NavProps) {
    const { pathname } = useRouter();
    const [open, setOpen] = useState(false);
    const isDesktop = useResponsive('up', 'md');
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


                    }}>
                        <Logo sx={{ mx: 2.5, my: 2.5 }} />
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                mr: 1,
                            }}>
                            <Iconify width={30} color="white" icon="iconamoon:close" />
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

// Presentation Data (place: development only)

