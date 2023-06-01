import Category from "./CategoryItem"
import Product from "./ProductItem"
import Iconify from "~/components/iconify/Iconify"
import { CustomInput, InputAdornment } from "./Input"
import { Box, Grid, Paper, Typography, Button, Chip, useTheme, Stack, Input, IconButton } from "@mui/material"
import { useState, useMemo, ChangeEvent } from "react"
import axios from "axios"
import { useLocalStorage } from "@mantine/hooks"
import RecentSearch from "./RecentSearchItem"
import useResponsive from "~/hooks/useResponsive"


export default function Search() {
    const theme = useTheme()
    const isDesktop = useResponsive('up', 'md');
    const [isFocused, setFocus] = useState(false)
    const [RecentSearches, setRecentSearches] = useLocalStorage({ key: 'search-history', defaultValue: [] })
    const [text, setText] = useState('')
    const [searchProducts, setSearchProducts] = useState('');
    const [searchResults, setSearchResults] = useState({
        categories: [] as any[],
        products: [] as any[]
    });


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

    const noSearchResult = [...searchResults.categories, ...searchResults.products].length == 0

    const handleInputCleanUp = () => {
        setText('')
    }

    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () => {
        setFocus(false)

    }


    const handleClearSearches = () => {
        setRecentSearches([])
    }




    return (

        <>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <CustomInput
                    sx={{ width: '500px', ml: 'auto' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={text}
                    onKeyUp={handleKeyUp}
                    onChange={handleChange}
                    id="outlined-start-adornment"
                    placeholder="Search goes here.."
                    startAdornment={(
                        <InputAdornment>
                            <Iconify
                                width={22}
                                icon="eva:search-fill"
                                sx={{ ml: 1, color: 'text.disabled' }} />
                        </InputAdornment>
                    )}
                    endAdornment={text ? (
                        <InputAdornment onClick={handleInputCleanUp}>
                            <Iconify
                                width={22}
                                icon="iconamoon:close-fill"
                                sx={{ ml: 1, color: 'text.disabled' }} />
                        </InputAdornment>
                    ) : undefined}
                />

                {isFocused && RecentSearches.length !== 0 && (
                    <Paper
                        sx={{
                            mt: 1,
                            px: 2,
                            pb: 2,
                            width: '100%',
                            overflow: 'hidden',
                            background: 'white',
                            position: 'absolute',
                            boxShadow: (t) => t.customShadows.dialog,
                        }}>

                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                            <Typography py={2.5} variant="body1" fontWeight={600} color={'GrayText'}>Recent Searches</Typography>

                            <Button onClick={handleClearSearches} size="small" variant="soft" color="inherit"  >
                                <Typography py={2.5} variant="caption" fontWeight={600} color={'GrayText'}>Clear Searches</Typography>
                            </Button>

                        </Stack>

                        <Stack flexWrap={'wrap'} gap={1} direction={'row'}>
                            {RecentSearches.map((name) => <RecentSearch name={name} />)}

                        </Stack>


                    </Paper>)
                }





                {isFocused && !noSearchResult && (
                    <Paper
                        sx={{
                            mt: 1,
                            pb: 0,
                            width: '100%',
                            overflow: 'hidden',
                            background: 'white',
                            position: 'absolute',
                            boxShadow: (t) => t.customShadows.dialog,
                        }}>

                        <Grid container spacing={1} px={2} >
                            {searchResults.categories.length !== 0 && (
                                <Grid item xs={4}>
                                    <Typography py={2.5} variant="body1" fontWeight={600} color={'GrayText'}>Collection</Typography>
                                    <Box>
                                        {searchResults.categories.map((category) => <Category name={category?.name} />)}
                                    </Box>
                                </Grid>
                            )}

                            {searchResults.products.length !== 0 && (
                                <Grid item xs={8}>
                                    <Typography py={2.5} variant="body1" fontWeight={600} color={'GrayText'}>Top Products</Typography>

                                    <Grid container gap={1}>
                                        {
                                            searchResults.products.map((products) => {
                                                return <Product name={products.name} />
                                            })
                                        }
                                    </Grid>

                                </Grid>
                            )}

                        </Grid>


                        <Stack
                            px={2}
                            mt={2}
                            py={2.5}
                            fullWidth
                            borderRadius={0}
                            component={Button}
                            sx={{
                                flexDirection: 'row',
                                justifyContent: 'left',
                                background: theme.palette.grey[100],
                                color: 'initial',
                                ':hover': {
                                    color: theme.palette.primary.main
                                }
                            }}>
                            <Typography variant="body2">Explore all products matching <b>"{text}"</b> ({searchResults.products.length})  </Typography>
                            <Iconify icon="basil:arrow-right-solid" width={25} />
                        </Stack >
                    </Paper>
                )}


            </Box>

        </>
    )
}






