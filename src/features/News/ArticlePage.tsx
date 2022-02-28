import { Box, IconButton, Typography,Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { store } from '../../app/stores/store'
import Divider from '@mui/material/Divider';
import { format } from 'date-fns'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
export default observer(function ArticlePage() {
  const nav = useNavigate();
  const { id } = useParams();
  const { articleStore: { getArticle, currentArticle } } = store;
  useEffect(() => {
    getArticle(Number(id) || 0);
  },[id,getArticle])
  if (!currentArticle) {
    return (
      <Box className='wrapper-center-column' height="100vh">
        <SearchIcon sx={{fontSize:'120px',color:'#bbb',marginBottom:'20px'}}/>
        <Typography
        variant='h5'
        sx={{color:'#bbb'}}
        >
          We could not find this article
          </Typography>
        <Button 
        onClick={()=>nav('/')}
        sx={{margin:'20px 0px'}}
         variant='outlined'>
          Go back
        </Button>
      </Box>
    )
  }
  return (
    <Box display='flex' justifyContent='center'>
      <Box className='wrapper-center-column' width='100%%' maxWidth='700px' sx={{ boxShadow: '3px 6px 14px 0 rgb(0 0 0 / 10%)', padding: '20px', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '2%', left: '2%' }}>
          <IconButton onClick={() => nav('/')} sx={{ background: 'rgba(0,0,0,.1)' }}>
            <ArrowBackIosNewIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
        <img alt='article-thumbnail' src={currentArticle?.urlToImage || 'https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'} width="100%" height="auto" />
        <Typography
          variant='h5'
        >
          {currentArticle?.title}
        </Typography>
        <Box display='flex' justifyContent='center' width='100%'>
          <Divider variant="inset" sx={{ background: 'grey', height: '1px', width: '100%', margin: '15px 0px' }} />

        </Box>
        <Box display='flex' width='100%' flexDirection='column' alignItems='center' justifyContent='flex-start'>

          <Typography
            variant='body2'
            sx={{ width: '100%', margin: '5px 0px' }}
          >
            Author:{currentArticle?.author}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{ width: '100%', margin: '5px 0px' }}
          >
            Published at:{currentArticle?.publishedAt && format(new Date(currentArticle?.publishedAt), 'MM/dd/yyyy')}
          </Typography>
        </Box>

        <Typography
          variant='body1'
        >
          {currentArticle?.content}
        </Typography>

      </Box>
    </Box>
  )
})