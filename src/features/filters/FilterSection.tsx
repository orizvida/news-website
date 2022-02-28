import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { store } from '../../app/stores/store';

export default observer(function FilterSection() {
    const [search, setSearch] = useState('');
    const { articleStore: { setSearchInput, setFilter } } = store;

    const handleFilterClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>, name: "Business" | "Entertainment" | "General" | "Health" | "Science" | "Sports" | "Technology") => {
        setFilter(name)
    }
    return (
        <Box className='wrapper-center-column'>
            <TextField
                onKeyUp={(e: any) => setSearchInput(e.target.value)}
                id="outlined-basic"
                label="Search" variant="outlined" />

            <Box className='wrapper-center'>
                <FormControl>
                    <FormLabel  id="demo-radio-buttons-group-label">Category</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <Box display='flex'>
                        <FormControlLabel onClick={e => setFilter('Business')} value="Business" control={<Radio />} label="Business" />
                        <FormControlLabel onClick={e => setFilter('Entertainment')} value="Entertainment" control={<Radio />} label="Entertainment" />
                        <FormControlLabel onClick={e => setFilter('General')} value="General" control={<Radio />} label="General" />
                        <FormControlLabel onClick={e => setFilter('Health')} value="Health" control={<Radio />} label="Health" />
                        <FormControlLabel onClick={e => setFilter('Science')} value="Science" control={<Radio />} label="Science" />
                        <FormControlLabel onClick={e => setFilter('Sports')} value="Sports" control={<Radio />} label="Sports" />
                        <FormControlLabel onClick={e => setFilter('Technology')} value="Technology" control={<Radio />} label="Technology" />
                        </Box>
                       
                    </RadioGroup>
                </FormControl>
               
            </Box>

        </Box>
    )
})
