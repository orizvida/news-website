import { Grid, Skeleton,Box } from '@mui/material';
import React from 'react'

export default function CardPlaceHolder() {
    return (
        <Grid container wrap="nowrap">
            <Box  sx={{ width: '100%', marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={'100%'} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
            </Box>
        </Grid>
      );
    }

