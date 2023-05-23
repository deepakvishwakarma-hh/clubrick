
import NextLink from 'next/link';
import Image from '~/components/image/Image';
import { Grid, Link, Card, Box, Stack, Typography, Container } from '@mui/material'
import { CategoryCard } from '~/sections/@dashboard/e-commerce/shop'

export default function AdsBoard() {
    return (
        <Box sx={{ background: t => t.palette.grey[200], p: 2, my: 2 }}
        >
            <Container>

                <Typography variant="h5" py={2} noWrap gutterBottom>
                    FOR THE ONES WHO LIKE TO MOVE
                </Typography>

                <Grid container sx={{ mb: 5 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {categoryData.map((_, index) => (
                        <Grid item xs={5} sm={4} md={4} key={index}>

                            <Link component={NextLink} href={_.href} color="inherit" variant="subtitle2" noWrap>
                                <Card
                                    sx={{
                                        '&:hover .add-cart-btn': {
                                            opacity: 1,
                                        },
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Box sx={{ position: 'relative' }}>

                                        <Image alt={_.name} src={_.cover} sx={{ borderRadius: 1.5 }} />
                                    </Box>


                                </Card>
                            </Link>


                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>



    )
}

const categoryData = [
    { name: "shirt", cover: 'https://contents.mediadecathlon.com/s992369/k$d02443fda50f4ecb7e5224ab348bbdcb/mini%20banner%2001.jpg?format=auto&quality=70&f=440x0', href: '/' },
    { name: "pents", cover: 'https://contents.mediadecathlon.com/s992370/k$d4933e73c94708ec3ccfcf9114f3ab87/mini%20banner%2002.jpg?format=auto&quality=70&f=440x0', href: '/' },

    { name: "shoes", cover: 'https://contents.mediadecathlon.com/s992367/k$786940dd5adc88c474f76bda1c368af5/mini%20banner%2004.jpg?format=auto&quality=70&f=440x0', href: '/' },



]
