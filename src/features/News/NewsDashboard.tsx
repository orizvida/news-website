import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { store } from '../../app/stores/store';
import NewsListItem from './NewsListItem'

export default function NewsDashboard() {
    const { articleStore } = store;
    const { listArticles, articles } = articleStore;
    useEffect(() => {
        listArticles();
    }, [])
    return (
        <Grid container>
            {articles.map((article,i) => (
                <Grid item xs={12} md={4} lg={3} key={i}>
                    <NewsListItem />
                </Grid>
            ))}

        </Grid>
    )
}
