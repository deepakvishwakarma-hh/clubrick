interface Props {
    name: string,
    paragraph?: string,
    products: [],
    href: string
}

import Link from 'next/link';
import { Button, Grid, Typography } from '@mui/material';
import { ShopProductCard } from '~/sections/@dashboard/e-commerce/shop';

export default function ProductList({ name, paragraph, products, href }: Props) {
    return (
        <Grid
            sx={{
                border: '1px whitesmoke solid',
                borderRadius: 2,
                overflow: "hidden",
                p: 2,
                my: 5,
                flexDirection: { xs: 'column', sm: 'row' },
            }}
            container
            spacing={2}
        >
            <Grid item xs={12} sm={3} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                <Typography textTransform={"capitalize"} sx={{ pt: 2 }} variant="h3" noWrap gutterBottom>
                    {name}
                </Typography>

                <Typography textTransform={"capitalize"} sx={{ mb: 2 }} variant="body1" gutterBottom>
                    {paragraph}
                </Typography>

                <Button LinkComponent={Link} href={href} sx={{ mt: 2 }} variant='soft'>
                    See all products
                </Button>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ flexDirection: 'row' }}
                >
                    {mockProducts.map((_, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index} sx={{ width: '100%' }}>
                            <ShopProductCard product={_} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>


    )
}



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