import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField,IconButton } from '@mui/material'
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { store } from '../../app/stores/store';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export default observer(function FilterSection() {
    const { articleStore: { setSearchInput, searchInput, setFilter, clearResults, filter } } = store;
    const [value, setValue] = useState(searchInput);
    const [open, setOpen] = useState(false);

    const handleSearch = () =>{
        if (value === '') {
            setOpen(true);
        }
        else {
            clearResults();
            setSearchInput(value)
        }
    }
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {

        setOpen(false);
    }
    const action = (
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      );
      
        return (
            <Box className='wrapper-center-column'>
                <Box display='flex' justifyContent='center'>
                <TextField
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyUp={(e: any) => {

                        if (e.key === 'Enter') {
                            handleSearch()
                        }

                    }}
                    id="outlined-basic"
                    label="Search" variant="outlined" />
                    <IconButton onClick={handleSearch}>
                        <ArrowBackIosNewIcon sx={{transform:'rotate(180deg)'}}/>
                    </IconButton>
                </Box>
               

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
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Please enter some text"
                        action={action}
                    />
                </Box>

            </Box>
        )
    })
