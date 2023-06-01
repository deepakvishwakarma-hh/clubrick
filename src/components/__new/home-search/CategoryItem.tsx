import { Stack, Button, useTheme, Typography } from "@mui/material"
import Iconify from "~/components/iconify/Iconify"

interface category {
    name: string,
}

export default function Category({ name }: category) {
    const theme = useTheme()

    return (
        <Stack
            component={Button}
            sx={{
                p: 0,
                mb: 1,
                py: 1,
                width: "100%",
                color: 'black',
                flexDirection: 'row',
                borderRadius: '.3rem',
                justifyContent: 'left',
                ':hover': {
                    color: theme.palette.primary.main,
                    '& .iconify': {
                        color: theme.palette.primary.main
                    }
                }
            }}
        >
            <Iconify
                flex={1}
                icon="eva:search-fill"
                className="iconify"
                sx={{
                    mx: 1,
                    color: 'gray',
                }}
            />
            <Typography
                flex={2}
                textAlign="left"
                variant="subtitle2"
                textTransform="capitalize"
            >
                {name}
            </Typography>
            <Iconify
                flex={1}
                width={15}
                icon="iconoir:arrow-tl"
                className="iconify"
                sx={{
                    mx: 2,
                    color: 'gray',
                }}
            />
        </Stack>

    )
}


export function Category2({ name }: category) {
    const theme = useTheme()

    return (
        <Stack
            component={Button}
            sx={{
                p: 0,
                mb: 1,
                py: 1,
                width: "100%",
                color: 'black',
                flexDirection: 'row',
                borderRadius: '.3rem',
                justifyContent: 'left',
                ':hover': {
                    color: theme.palette.primary.main,
                    '& .iconify': {
                        color: theme.palette.primary.main
                    }
                }
            }}
        >
            <Iconify
                flex={.5}
                icon="eva:search-fill"
                className="iconify"
                width={24}
                sx={{
                    mx: 1,
                    color: 'gray',
                }}
            />
            <Typography
                flex={2}
                textAlign="left"
                variant="subtitle2"
                textTransform="capitalize"
            >
                {name}
            </Typography>
            <Iconify
                flex={.5}
                width={20}
                icon="iconoir:arrow-tl"
                className="iconify"
                sx={{
                    mx: 2,
                    color: 'gray',
                }}
            />
        </Stack>

    )
}
