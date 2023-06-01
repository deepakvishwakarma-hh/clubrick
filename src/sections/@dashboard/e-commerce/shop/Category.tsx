import { paramCase } from 'change-case';
// next
import NextLink from 'next/link';
// @mui
import { Box, Card, Link, Stack, Fab } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// redux
import { useDispatch } from '../../../../redux/store';
import { addToCart } from '../../../../redux/slices/product';
// @types
import { IProduct } from '../../../../@types/product';
// components
import Iconify from '../../../../components/iconify';
import Label from '../../../../components/label';
import Image from '../../../../components/image';
import { ColorPreview } from '../../../../components/color-utils';
import { Datum } from '~/features/types/categories';
// ----------------------------------------------------------------------

type Props = {
  product: any;
};

export default function CategoryCard({ attributes: { cover, name, href } }: Datum) {
  const dispatch = useDispatch();

  const linkTo = PATH_DASHBOARD.eCommerce.view(paramCase(name));

  return (
    <Link component={NextLink} href={linkTo} color="inherit" variant="subtitle2" noWrap>
      <Card
        sx={{
          '&:hover .add-cart-btn': {
            opacity: 1,
          },
          cursor: 'pointer',
        }}
      >
        <Box sx={{ position: 'relative', p: 1 }}>
          <Image
            alt={name}
            src={cover?.data.attributes.url}
            ratio="1/1"
            sx={{ borderRadius: 1.5 }}
          />
        </Box>

        <Stack spacing={1} sx={{ px: 3, pb: 1, textTransform: 'capitalize' }}>
          {name} Store
        </Stack>
      </Card>
    </Link>
  );
}
