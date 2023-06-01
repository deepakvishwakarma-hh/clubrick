import { NextApiHandler } from "next";

interface params {
    query: string
}


const categories = [
    { id: 1, name: 'electronics' },
    { id: 2, name: 'clothing' },
    { id: 3, name: 'books' },
    { id: 4, name: 'home decor' },
    { id: 5, name: 'shoes' },
    { id: 6, name: 'accessories' },
    { id: 7, name: 'beauty' },
    { id: 8, name: 'sports' },
    { id: 9, name: 'toys' },
    { id: 10, name: 'kitchen' },
];

// Dummy products
const products = [
    { id: 1, name: 'red laptop', categoryId: 1, price: 999.99 },
    { id: 2, name: 'blue t-shirt', categoryId: 2, price: 19.99 },
    { id: 3, name: 'apple smartphone ', categoryId: 1, price: 799.99 },
    { id: 4, name: 'jeans', categoryId: 2, price: 49.99 },
    { id: 5, name: 'headphones', categoryId: 1, price: 99.99 },
    { id: 6, name: 'novel', categoryId: 3, price: 9.99 },
    { id: 7, name: 'sofa', categoryId: 4, price: 499.99 },
    { id: 8, name: 'dining table', categoryId: 4, price: 299.99 },
    { id: 9, name: 'running shoes', categoryId: 5, price: 79.99 },
    { id: 10, name: 'watch', categoryId: 6, price: 199.99 },
    { id: 11, name: 'dress', categoryId: 2, price: 69.99 },
    { id: 12, name: 'jacket', categoryId: 2, price: 89.99 },
    { id: 13, name: 'handbag', categoryId: 6, price: 49.99 },
    { id: 14, name: 'shorts', categoryId: 2, price: 29.99 },
    { id: 15, name: 'makeup set', categoryId: 7, price: 39.99 },
    { id: 16, name: 'yoga mat', categoryId: 8, price: 29.99 },
    { id: 17, name: 'board game', categoryId: 9, price: 24.99 },
    { id: 18, name: 'cookware set', categoryId: 10, price: 79.99 },
    { id: 19, name: 'tablet', categoryId: 1, price: 299.99 },
    { id: 20, name: 'hoodie', categoryId: 2, price: 39.99 },
    { id: 21, name: 'art book', categoryId: 3, price: 14.99 },
    { id: 22, name: 'cushion cover', categoryId: 4, price: 9.99 },
    { id: 23, name: 'sneakers', categoryId: 5, price: 89.99 },
    { id: 24, name: 'necklace', categoryId: 6, price: 19.99 },
    { id: 25, name: 'lipstick', categoryId: 7, price: 12.99 },
    { id: 26, name: 'basketball', categoryId: 8, price: 24.99 },
    { id: 27, name: 'lego set', categoryId: 9, price: 49.99 },
    { id: 28, name: 'knife set', categoryId: 10, price: 59.99 },
    { id: 29, name: 'camera', categoryId: 1, price: 699.99 },
    { id: 30, name: 'polo shirt', categoryId: 2, price: 29.99 },
    { id: 31, name: 'cookbook', categoryId: 3, price: 19.99 },
    { id: 32, name: 'wall clock', categoryId: 4, price: 19.99 },
    { id: 33, name: 'sandals', categoryId: 5, price: 49.99 },
    { id: 34, name: 'scarf', categoryId: 6, price: 9.99 },
    { id: 35, name: 'nail polish', categoryId: 7, price: 7.99 },
    { id: 36, name: 'tennis racket', categoryId: 8, price: 89.99 },
    { id: 37, name: 'puzzle', categoryId: 9, price: 14.99 },
    { id: 38, name: 'blender', categoryId: 10, price: 39.99 },
    { id: 39, name: 'desktop computer', categoryId: 1, price: 1499.99 },
    { id: 40, name: 'sweater', categoryId: 2, price: 59.99 },
];









const test = {
    categories: [
        { id: 1, name: 'shirt' },
        { id: 2, name: 'cheak shirt' },
        { id: 3, name: 'helf shirt' },
        { id: 4, name: 'woman shirt' },
        { id: 5, name: 'office shirt' },
    ],
    products: [
        { id: 33, name: 'red armani shirt with stripes', categoryId: 5, price: 49.99 },
        { id: 33, name: 'gucci office shirt with stripes', categoryId: 5, price: 49.99 },
        { id: 33, name: 'blue armani shirt for man', categoryId: 5, price: 49.99 },
        { id: 33, name: 'half sefraon shirt', categoryId: 5, price: 49.99 },
    ]
}


function searchWord(paragraph: string, searchTerm: string) {
    const regex = new RegExp(`\\b${searchTerm}\\b`, 'gi');
    return regex.test(paragraph);
}


const Handler: NextApiHandler = (req, res) => {
    const { query } = req.query
    const filteredCategories = test.categories.filter(cate => searchWord(cate.name, query as string))
    const filteredProducts = test.products.filter(products => searchWord(products.name, query as string))
    return res.send({
        categories: filteredCategories,
        products: filteredProducts
    })

}

export default Handler