import { Box, useTheme, IconButton, Input, Stack, TextField } from '@mui/material'
import Iconify from '~/components/iconify/Iconify'
import { Category3, Category2 } from '~/components/__new/home-search/CategoryItem'
import { useLocalStorage } from '@mantine/hooks';


import axios from 'axios';
import { useState, ChangeEvent } from 'react';






export default function searchSuggetion() {


    const theme = useTheme()
    const [isFocused, setFocus] = useState(false)
    const [RecentSearches, setRecentSearches] = useLocalStorage({ key: 'search-history', defaultValue: [] })
    const [text, setText] = useState('')
    const [searchProducts, setSearchProducts] = useState('');
    const [searchResults, setSearchResults] = useState({
        categories: [] as any[],
        products: [] as any[]
    });









    // handler



    const handleChangeSearch = async (value: string) => {
        try {
            setSearchProducts(value);
            if (value) {
                console.log(value)
                const response = await axios.get('/api/search', {
                    params: { query: value },
                });

                setSearchResults(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleGotoProduct = (name: string) => {
        alert('handleGotoProduct()')
        // push(PATH_DASHBOARD.eCommerce.view(paramCase(name)));
    };


    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleGotoProduct(searchProducts);
            setRecentSearches(prev => [...prev, text] as any)
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

    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () => {
        setFocus(false)

    }






    return (
        <>





            <Box>

                <Stack
                    direction={'row'}
                    sx={{ background: 'whitesmoke', p: 1 }}>

                    <IconButton sx={{ px: 1 }} >
                        <Iconify width={25} icon="majesticons:arrow-left" />
                    </IconButton>

                    <TextField

                        variant={"outlined"}
                        size='small'
                        onKeyUp={handleKeyUp}
                        onMouseEnter={handleFocus}
                        onMouseLeave={handleBlur}

                        onChange={handleChange}
                        placeholder="Search goes here..." sx={{
                            flex: 1,

                            "& fieldset": { border: 'none' },
                        }} />
                </Stack>



                <Box mt={1}>


                    {searchResults.categories.length == 0 && RecentSearches.map((name) => <Category3 name={name} />)}


                    {searchResults.categories.map((res) => <Category2 name={res.name} />)}



                </Box>


            </Box >






        </>
    )
}