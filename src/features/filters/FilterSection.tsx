import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { filter, filterOptions } from '../../app/models/newsSource';
import { store } from '../../app/stores/store';

export default observer(function FilterSection() {
    const { articleStore: { setSearchInput, searchInput, setFilter, clearResults, filter } } = store;
    const [value, setValue] = useState(searchInput);
    return (
        <Box className='wrapper-center-column'>
            <TextField
                value={value}
                onChange={e=>setValue(e.target.value)}
                onKeyUp={(e: any) => {
                    
                    if (e.key === 'Enter') {
                        clearResults();
                        setSearchInput(e.target.value)
                    }
                
                }}
            id="outlined-basic"
                label="Search" variant="outlined" />

            <Box className='wrapper-center'>
                <FormControl>
                    <FormLabel id="category-label">Category</FormLabel>
                    <RadioGroup
                        onChange={e => setFilter(e.target.value)}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <Box display='flex'>
                            <FormControlLabel checked={filter === 'Business'} onClick={e => setFilter('Business')} value="Business" control={<Radio />} label="Business" />
                            <FormControlLabel checked={filter === 'Entertainment'} onClick={e => setFilter('Entertainment')} value="Entertainment" control={<Radio />} label="Entertainment" />
                            <FormControlLabel checked={filter === 'General'} onClick={e => setFilter('General')} value="General" control={<Radio />} label="General" />
                            <FormControlLabel checked={filter === 'Health'} onClick={e => setFilter('Health')} value="Health" control={<Radio />} label="Health" />
                            <FormControlLabel checked={filter === 'Science'} onClick={e => setFilter('Science')} value="Science" control={<Radio />} label="Science" />
                            <FormControlLabel checked={filter === 'Sports'} onClick={e => setFilter('Sports')} value="Sports" control={<Radio />} label="Sports" />
                            <FormControlLabel checked={filter === 'Technology'} onClick={e => setFilter('Technology')} value="Technology" control={<Radio />} label="Technology" />
                        </Box>

                    </RadioGroup>
                </FormControl>

            </Box>

        </Box>
    )
})
