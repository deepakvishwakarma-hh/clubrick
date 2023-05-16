// next
import Head from 'next/head';
// @mui
import { useTheme, styled } from '@mui/material/styles';

import { Box, Button, Stack, Card, Container, CardHeader, CardContent, Grid, Paper, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
// layouts
import MainLayout from '../layouts/main';
// components
import ScrollProgress from '../components/scroll-progress';
// sections
import Scrollbar from '~/components/scrollbar/Scrollbar';

import {
    CarouselAnimation,
} from '~/sections/_examples/extra/carousel';

import _mock from '~/_mock/_mock';
import { Masonry } from '@mui/lab';
import { CategoryCard, ShopProductCard } from '~/sections/@dashboard/e-commerce/shop';
// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

// 


const carouselMockData = [{
    id: '1',
    title: 'Great Deal On Beauty Products',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    description: 'If you override a material-ui component you dont have to override all textfields, you can do it for a single one using the classes property. ',
},
{
    id: '12',
    title: 'Great Deal On Shoes',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'If you override a material-ui component you dont have to override all textfields, you can do it for a single one using the classes property. ',
}




]




const categoryData = [
    { name: "shirt", cover: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', href: '/' },
    { name: "pents", cover: 'https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', href: '/' },
    { name: "shoes", cover: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80', href: '/' },
    { name: "slippers", cover: 'https://images.unsplash.com/photo-1567347167012-29482aa7a9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', href: '/' },
    { name: "t-shirt", cover: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', href: '/' },
    { name: "mobiles", cover: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80', href: '/' },


]

const mockProducts = [
    {
        id: '1',
        cover: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80',
        images: ['product1-image1.jpg', 'product1-image2.jpg'],
        name: 'Product 1',
        price: 19.99,
        code: 'P001',
        sku: 'SKU001',
        tags: ['tag1', 'tag2'],
        priceSale: null,
        totalRating: 4.5,
        totalReview: 10,
        ratings: [
            { name: 'John Doe', starCount: 5, reviewCount: 3 },
            { name: 'Jane Smith', starCount: 4, reviewCount: 7 },
        ],
        reviews: [
            { id: 'r1', userId: 'u1', rating: 4, comment: 'Great product!' },
            { id: 'r2', userId: 'u2', rating: 5, comment: 'Highly recommended.' },
        ],
        colors: ['red', 'blue', 'green'],
        status: 'available',
        inventoryType: 'in_stock',
        sizes: ['S', 'M', 'L'],
        available: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sold: 50,
        createdAt: new Date(),
        category: 'Clothing',
        gender: 'Unisex',
    },
    {
        id: '2',
        cover: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80',
        images: ['product2-image1.jpg', 'product2-image2.jpg'],
        name: 'Product 2',
        price: 29.99,
        code: 'P002',
        sku: 'SKU002',
        tags: ['tag1', 'tag3'],
        priceSale: 24.99,
        totalRating: 4.2,
        totalReview: 5,
        ratings: [
            { name: 'Alice Johnson', starCount: 4, reviewCount: 2 },
            { name: 'Bob Anderson', starCount: 5, reviewCount: 3 },
        ],
        reviews: [
            { id: 'r3', userId: 'u3', rating: 4, comment: 'Good quality.' },
            { id: 'r4', userId: 'u4', rating: 4, comment: 'Nice design.' },
        ],
        colors: ['black', 'white', 'gray'],
        status: 'available',
        inventoryType: 'in_stock',
        sizes: ['M', 'L', 'XL'],
        available: 50,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sold: 20,
        createdAt: new Date(),
        category: 'Shoes',
        gender: 'Men',
    },
    {
        id: '1',
        cover: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80',
        images: ['product1-image1.jpg', 'product1-image2.jpg'],
        name: 'Product 1',
        price: 19.99,
        code: 'P001',
        sku: 'SKU001',
        tags: ['tag1', 'tag2'],
        priceSale: null,
        totalRating: 4.5,
        totalReview: 10,
        ratings: [
            { name: 'John Doe', starCount: 5, reviewCount: 3 },
            { name: 'Jane Smith', starCount: 4, reviewCount: 7 },
        ],
        reviews: [
            { id: 'r1', userId: 'u1', rating: 4, comment: 'Great product!' },
            { id: 'r2', userId: 'u2', rating: 5, comment: 'Highly recommended.' },
        ],
        colors: ['red', 'blue', 'green'],
        status: 'available',
        inventoryType: 'in_stock',
        sizes: ['S', 'M', 'L'],
        available: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sold: 50,
        createdAt: new Date(),
        category: 'Clothing',
        gender: 'Unisex',
    },
    {
        id: '2',
        cover: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80',
        images: ['product2-image1.jpg', 'product2-image2.jpg'],
        name: 'Product 2',
        price: 29.99,
        code: 'P002',
        sku: 'SKU002',
        tags: ['tag1', 'tag3'],
        priceSale: 24.99,
        totalRating: 4.2,
        totalReview: 5,
        ratings: [
            { name: 'Alice Johnson', starCount: 4, reviewCount: 2 },
            { name: 'Bob Anderson', starCount: 5, reviewCount: 3 },
        ],
        reviews: [
            { id: 'r3', userId: 'u3', rating: 4, comment: 'Good quality.' },
            { id: 'r4', userId: 'u4', rating: 4, comment: 'Nice design.' },
        ],
        colors: ['black', 'white', 'gray'],
        status: 'available',
        inventoryType: 'in_stock',
        sizes: ['M', 'L', 'XL'],
        available: 50,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sold: 20,
        createdAt: new Date(),
        category: 'Shoes',
        gender: 'Men',
    },

];


export default function HomePage() {
    const theme = useTheme();

    const { data: session } = useSession()
    console.log(session)
    return (
        <>
            <Head>
                <title> The starting point for your next project | Minimal UI</title>
            </Head>

            <Box sx={{ mx: 5, my: 4 }}>
                <CarouselAnimation data={carouselMockData} />
            </Box>

            <Container>

                <Typography variant="h5" noWrap gutterBottom>
                    Categories
                </Typography>

                <Grid container sx={{ mb: 5 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {categoryData.map((_, index) => (
                        <Grid item xs={2} sm={4} md={2} key={index}>
                            <CategoryCard {..._} />

                        </Grid>
                    ))}
                </Grid>





                <Grid sx={{ border: '1px whitesmoke solid', borderRadius: 2, overflow: "hidden", p: 2, my: 5 }} container spacing={2}>
                    <Grid item xs={3} sx={{}} >

                        <Typography sx={{ pt: 2 }} variant="h3" noWrap gutterBottom>
                            Shoes
                        </Typography>
                        <Button variant='soft'>See all products</Button>

                    </Grid>
                    <Grid item xs={9}>




                        {/* <Scrollbar> */}


                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                            {mockProducts.map((_, index) => (
                                <Grid item xs={2} sm={4} md={3} key={index}>

                                    <ShopProductCard product={_} />

                                </Grid>
                            ))}
                        </Grid>



                        {/* </Scrollbar> */}

                    </Grid>
                </Grid>



                <Grid sx={{ border: '1px whitesmoke solid', borderRadius: 2, overflow: "hidden", p: 2, my: 5 }} container spacing={2}>
                    <Grid item xs={3} sx={{}} >

                        <Typography sx={{ pt: 2 }} variant="h3" noWrap gutterBottom>
                            Speakers
                        </Typography>
                        <Button variant='soft'>See all products</Button>

                    </Grid>
                    <Grid item xs={9}>




                        {/* <Scrollbar> */}


                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                            {mockProducts.map((_, index) => (
                                <Grid item xs={2} sm={4} md={3} key={index}>

                                    <ShopProductCard product={_} />

                                </Grid>
                            ))}
                        </Grid>



                        {/* </Scrollbar> */}

                    </Grid>
                </Grid>

            </Container >

















        </>
    );
}
