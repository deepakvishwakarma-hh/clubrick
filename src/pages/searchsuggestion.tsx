import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, ChangeEvent } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import Iconify from '~/components/iconify/Iconify'
import { Box, IconButton, Stack, TextField, useTheme } from '@mui/material'
import { Category3, Category2 } from '~/components/__new/home-search/CategoryItem'

export default function searchSuggetion() {
    const { push } = useRouter()
    const theme = useTheme()
    const [text, setText] = useState('')
    const [searchProducts, setSearchProducts] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [RecentSearches, setRecentSearches] = useLocalStorage({ key: 'search-history', defaultValue: [] })

    const handleChangeSearch = async (value: string) => {
        try {
            setSearchProducts(value);
            if (value) {
                console.log(value)
                const response = await axios.get('/api/search', {
                    params: { query: value },
                });

                setSearchResults(response.data.categories);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleGotoProduct = (name: string) => {
        alert('handleGotoProduct()')
    };


    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleGotoProduct(searchProducts);
            setRecentSearches(prev => [...new Set(prev) as any, text] as any)
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        setText(value)
        // prevent api call on empty input
        if (value.trim() !== '') {
            handleChangeSearch(value.trim())
        }
    }

    return (
        <>
            <Box>
                <Stack
                    direction={'row'}
                    sx={{
                        p: 1,
                        background: theme.palette.mode == 'dark'
                            ? theme.palette.grey[800]
                            : theme.palette.grey[200],
                    }}>

                    <IconButton onClick={() => push('/')} sx={{ px: 1 }} >
                        <Iconify width={25} icon="majesticons:arrow-left" />
                    </IconButton>

                    <TextField
                        autoFocus
                        size='small'
                        autoComplete="off"
                        variant={"outlined"}
                        onKeyUp={handleKeyUp}
                        onChange={handleChange}
                        placeholder="Search goes here..."
                        sx={{
                            flex: 1,
                            "& fieldset": { border: 'none' },
                        }} />
                </Stack>

                <Box mt={1}>
                    {searchResults.length == 0 && RecentSearches.map((name) => <Category3 name={name} />)}
                    {searchResults.map((res: any) => <Category2 name={res.name} />)}
                </Box>
            </Box>
        </>
    )
}