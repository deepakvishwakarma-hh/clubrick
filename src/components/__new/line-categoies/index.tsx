import { type Datum } from '~/features/types/menu';
import { Button, Box, useTheme, Container } from '@mui/material';

interface Props {
  categories: Datum[]
}

export default function LineCategoies({ categories }: Props) {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 9 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
        {categories.map((category, i) => (
          <Button
            key={i}
            href={category.attributes.href}
            sx={{
              color: theme.palette.common.black,
              fontWeight: theme.typography.body2,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            {category.attributes.name}
          </Button>
        ))}
      </Box>
    </Container>
  );
}