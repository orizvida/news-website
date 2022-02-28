import { Box } from '@mui/material'
import React from 'react'
import FilterSection from '../filters/FilterSection'
import NewsDashboard from './NewsDashboard'

export default function MainNewsPage() {
  return (
    <Box width="100%" height="100%">
         <FilterSection/>
          <NewsDashboard/>
    </Box>
  )
}
