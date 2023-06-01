import { Box, useTheme, IconButton, Input, Stack } from '@mui/material'
import Iconify from '~/components/iconify/Iconify'
import { Category2 } from '~/components/__new/home-search/CategoryItem'
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

                <Stack direction={'row'} py={1}
                >
                    <IconButton sx={{ px: 2 }} >
                        <Iconify width={25} icon="majesticons:arrow-left" />
                    </IconButton>

                    <Input

                        onMouseEnter={handleFocus}
                        onMouseLeave={handleBlur}

                        onChange={handleChange}
                        defaultValue={'shirt'}
                        placeholder="Search goes here..." sx={{ flex: 1, }} />
                </Stack>



                <Box>


                    {searchResults.categories.map((name) => <Category2 name={name.name} />)}


                </Box>


            </Box>






        </>
    )
}