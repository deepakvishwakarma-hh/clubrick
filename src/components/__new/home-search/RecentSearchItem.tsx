import { Stack, Button, useTheme, Typography } from "@mui/material"
import Iconify from "~/components/iconify/Iconify"

interface category {
    name: string
}

export default function RecentSearch({ name }: category) {
    const theme = useTheme()

    return (
        <Stack
            component={Button}
            sx={{
                p: 0,
                py: 1,
                color: 'black',
                flexDirection: 'row',
                borderRadius: '1',
                justifyContent: 'left',
                background: theme.palette.grey[200],
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
