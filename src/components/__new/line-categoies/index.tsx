import { Button, Box, useTheme, Container } from "@mui/material";
export default function LineCategoies() {
    const theme = useTheme()
    return (
        <Container sx={{ mt: 9 }}>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-around" }}>
                {you_can_say_this_dummmy_data.map(({ name, href }, i) =>
                (
                    <Button
                        key={i}
                        href={href}
                        sx={{
                            color: theme.palette.common.black,
                            fontWeight: theme.typography.body2,
                            '&:hover': {
                                color: theme.palette.primary.main
                            }
                        }}>{name}</Button>
                ))}
            </Box>
        </Container >
    )
}

const you_can_say_this_dummmy_data = [
    { name: "Electronics", href: "/electronics" },
    { name: "Clothing", href: "/clothing" },
    { name: "Home Decor", href: "/home-decor" },
    { name: "Beauty & Personal Care", href: "/beauty-personal-care" },
    { name: "Books", href: "/books" },
    { name: "Sports & Fitness", href: "/sports-fitness" },
    { name: "Toys & Games", href: "/toys-games" },
    { name: "Health & Wellness", href: "/health-wellness" },
    { name: "Jewelry", href: "/jewelry" },
    { name: "Automotive", href: "/automotive" }
]