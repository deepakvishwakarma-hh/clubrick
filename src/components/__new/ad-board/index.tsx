import Card from './card';
import { Datum as AdsT } from '~/features/types/ads';
import { Grid, Box, Typography, Container } from '@mui/material';

export default function AdsBoard(props: AdsT) {
  return (
    <Box sx={{
      background: (t) => t.palette.mode == 'dark'
        ? t.palette.grey[800]
        : t.palette.grey[200],
      p: 2, my: 2
    }}>
      <Container>
        <Typography variant="h5" py={2} noWrap gutterBottom>
          {props.attributes?.name}
        </Typography>

        <Grid
          container
          sx={{ mb: 5 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {props.attributes.board.map((_, index) => (
            <Card
              key={index}
              href={_.href}
              name={_.cover.data.attributes.name}
              cover={_.cover.data.attributes.url}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}



