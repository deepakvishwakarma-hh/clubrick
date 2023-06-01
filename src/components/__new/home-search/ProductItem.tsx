import Image from "~/components/image/Image"
import { Grid, Stack, Box, Typography, Chip } from "@mui/material"
interface props {
    name: string
}

export default function Product({ name }: props) {
    return (
        <Grid
            item
            xs={12}
            md={5.9}
            bgcolor={'whitesmoke'}
            sx={{
                borderRadius: .5,
                overflow: 'hidden',
                cursor: 'pointer'
            }}>

            <Stack
                direction={'row'}
                sx={{ height: '80px' }}>

                <Image
                    flex={1}
                    sx={{
                        width: '80px',
                        height: '100%'
                    }}
                    src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />

                <Box height={'100%'} ml={1}>
                    <Typography
                        py={1}
                        variant="subtitle2"
                        textTransform={'capitalize'}
                        flex={5}>{extractWords(name)}</Typography>
                    <Chip size="small" label="$ 100" />
                </Box>
            </Stack>


        </Grid>
    )
}


function extractWords(paragraph: string) {
    // Split the paragraph into an array of words
    const words = paragraph.split(' ');

    // Extract the first two words
    const extractedWords = words.slice(0, 3);

    // Return the extracted words as a string
    return extractedWords.join(' ').concat('...');
}