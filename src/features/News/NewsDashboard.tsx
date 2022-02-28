import { Box, Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { store } from '../../app/stores/store';
import CardPlaceHolder from '../placeholders/CardPlaceHolder';
import NewsListItem from './NewsListItem'
import InfiniteScroll from 'react-infinite-scroll-component';
export default observer(function NewsDashboard() {
    const { articleStore } = store;
    const { listArticles, articles, initialLoading, currentPage, total, loading } = articleStore;
    useEffect(() => {
        if (articles.length === 0)
            listArticles();
    }, [listArticles, articles.length])

    const noMoreArticles = (initial: boolean) => {
        return (
            <Box width="100%" display='flex' justifyContent='center' marginTop={2}>
                <Typography
                    variant='h5'
                >
                    {initial ? 'There are not articles under this filter' : 'There are no more available articles here'}
                </Typography>
            </Box>
        )
    }
    const loadingView = () => {
        return (
            <Grid container paddingTop={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder />
                </Grid>
            </Grid>
        )
    }
    if (initialLoading) {
        return (
            <>
                {loadingView()}
            </>
        );
    }
    if (articles.length === 0 && !loading && !initialLoading) {
        return (
            <>
                {noMoreArticles(true)}
            </>
        )
    }
    return (

        <InfiniteScroll
            dataLength={total} //This is important field to render the next data
            next={listArticles}
            hasMore={Boolean(currentPage * 20 < total)}
            loader={<>{loadingView()}</>}
            endMessage={
                <>

                    {noMoreArticles(false)}
                </>
            }

        >
            <Grid container width="100%" height="100%" paddingTop={2} spacing={2}  >
                {articles.map((article, i) => (
                    <Grid item xs={12} md={4} lg={3} key={i} display='flex' justifyContent='center'>
                        <NewsListItem article={article} index={i} />
                    </Grid>
                ))}
            </Grid>

        </InfiniteScroll>
    )
})
