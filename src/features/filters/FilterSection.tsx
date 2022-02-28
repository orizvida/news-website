import { Box, FormControlLabel, Radio, TextField, Typography } from '@mui/material'
import React from 'react'

export default function FilterSection() {
    return (
        <Box className='wrapper-center-column'>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
            <Typography
            variant='subtitle2'
            color='primary'
            >
                Category
            </Typography>
            <Box className='wrapper-center'>
                <FormControlLabel value="female" control={<Radio />} label="Business" />
                <FormControlLabel value="female" control={<Radio />} label="Entertainment" />
                <FormControlLabel value="female" control={<Radio />} label="General" />
                <FormControlLabel value="female" control={<Radio />} label="Health" />
                <FormControlLabel value="female" control={<Radio />} label="Science" />
                <FormControlLabel value="female" control={<Radio />} label="Sports" />
                <FormControlLabel value="female" control={<Radio />} label="Technology" />
            </Box>

        </Box>
    )
}
