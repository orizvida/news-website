import { Box, Divider, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { store } from '../../app/stores/store'

export default observer(function ArticlePage() {
  const { id } = useParams();
  const { articleStore: { getArticle,currentArticle} } = store;
  useEffect(() => {
    getArticle(Number(id) || 0);
  })
  return (
    <Box className='wrapper-center-column'>
      <Typography
      variant='h5'
      >
        {currentArticle?.title}
      </Typography>
      <Divider/>
      <Typography
      variant='h5'
      >
        {currentArticle?.publishedAt}
      </Typography>
      <Typography
      variant='h5'
      >
        {currentArticle?.author}
      </Typography>
      
      <Typography
      variant='h5'
      >
        {currentArticle?.description}
      </Typography>
      
    </Box>
  )
})