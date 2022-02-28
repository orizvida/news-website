import { Grid } from '@mui/material'
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { store } from '../../app/stores/store';
import CardPlaceHolder from '../placeholders/CardPlaceHolder';
import NewsListItem from './NewsListItem'
import InfiniteScroll from 'react-infinite-scroll-component';
export default observer(function NewsDashboard() {
    const { articleStore } = store;
    const { listArticles, articles,initialLoading,currentPage,total } = articleStore;
    useEffect(() => {
        if(articles.length === 0)
        listArticles();
    }, [listArticles])
    if(initialLoading){
        return(
            <Grid container>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder/>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder/>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder/>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder/>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <CardPlaceHolder/>
                </Grid>
        </Grid>
        )
    }
    return (
        <Grid container>
            {/* <InfiniteScroll
                dataLength={total} //This is important field to render the next data
                next={listArticles}
                hasMore={Boolean(currentPage * 20 < total)}
                loader={<>{loadingView()}</>}
                endMessage={
                    <></>
                }

            > */}
            {articles.map((article,i) => (
                <Grid item xs={12} md={4} lg={3} key={i}>
                    <NewsListItem article={article}/>
                </Grid>
            ))}

        </Grid>
    )
})
