import Head from 'next/head';
import strapi from '~/utils/strapi';
import MainLayout from '../layouts/main';
import useResponsive from '~/hooks/useResponsive';
import AdsBoard from '~/components/__new/ad-board';
import { Datum as AdsT } from '~/features/types/ads';
import { Datum as PDatum } from '~/features/types/categories';
import { Datum } from '~/features/types/carousel';
import { Datum as MenuCategoryType } from '~/features/types/menu';
import { MainDatum } from '~/features/types/categories-with-products';
import LineCategoies from '~/components/__new/line-categoies';
import { Box, Container, Grid, Typography } from '@mui/material';
import ProductList from '~/components/__new/product-list-previewer';
import { CategoryCard } from '~/sections/@dashboard/e-commerce/shop';
import { CarouselAnimation } from '~/sections/_examples/extra/carousel';
import { useSession } from 'next-auth/react';
HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

interface Props {
  ads: AdsT;
  carouselData: Datum[];
  popularCategories: PDatum[];
  categoriesWithProducts: MainDatum[];
  menuCategories: MenuCategoryType[];
}

export default function HomePage({
  ads,
  carouselData,
  menuCategories,
  popularCategories,
  categoriesWithProducts,
}: Props) {
  console.log({
    ads,
    carouselData,
    menuCategories,
    popularCategories,
    categoriesWithProducts,
  });
  // const user = strapi.fetchUser();
  // console.log(user);
  const { data: session } = useSession();
  console.log({ session });
  const isDesktop = useResponsive('up', 'md');
  return (
    <>
      <Head>
        <title>Clubrick</title>
      </Head>

      {isDesktop && <LineCategoies categories={menuCategories} />}

      <Box
        sx={{
          mb: 4,
          mt: 1,
          mx: isDesktop ? 5 : 1,
        }}
      >
        <CarouselAnimation data={carouselData} />
      </Box>

      <Container>
        <Typography variant="h5" noWrap gutterBottom>
          Most Popular Categories
        </Typography>

        <Grid
          container
          sx={{ mb: 5 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {popularCategories.map((_, index) => (
            <Grid item xs={2} sm={4} md={2} key={index}>
              <CategoryCard {..._} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <AdsBoard {...(ads as any)[0]} />

      <Container>
        {categoriesWithProducts.map((category) => (
          <ProductList
            paragraph={category.attributes.description}
            products={category.attributes.products as any}
            name={category.attributes.name}
            href={category.attributes.href}
          />
        ))}
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  let populate = '*';
  const menuCategories = await strapi.find('menu-categories');
  const carouselData = await strapi.find('carousels', { populate });
  const popularCategories = await strapi.find('popular-categories', { populate });
  const ads = await strapi.find('ad-boards', { populate: ['*', 'board', 'board.cover'] });
  const categoriesWithProducts = await strapi.find('categories-with-products', {
    populate: ['*', 'products', 'variants', 'variants.images'],
  });
  return {
    props: {
      ads: ads.data,
      carouselData: carouselData.data,
      menuCategories: menuCategories.data,
      popularCategories: popularCategories.data,
      categoriesWithProducts: categoriesWithProducts.data,
    },
    revalidate: 60,
  };
};
