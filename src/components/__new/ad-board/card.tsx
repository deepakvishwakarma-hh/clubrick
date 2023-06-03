import NextLink from 'next/link';
import Image from '~/components/image/Image';
import { Grid, Link, Card, Box } from '@mui/material';

interface Props {
    name: string,
    cover: string,
    href: string
}

const CardComponent = ({ name, cover, href }: Props) => {
    return (
        <Grid item xs={5} sm={4} md={4}>
            <Link
                noWrap
                href={href}
                color="inherit"
                variant="subtitle2"
                component={NextLink}>
                <Card
                    sx={{
                        '&:hover .add-cart-btn': {
                            opacity: 1,
                        },
                        cursor: 'pointer',
                    }}>
                    <Box sx={{ position: 'relative' }}>
                        <Image
                            alt={name}
                            src={cover}
                            sx={{ borderRadius: 1.5 }} />
                    </Box>
                </Card>
            </Link>
        </Grid>
    )
}

export default CardComponent