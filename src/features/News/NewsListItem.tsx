import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Article } from '../../app/models/newsSource'

interface Props{
    article:Article;
}
export default function NewsListarticle({article}:Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={article.urlToImage}
                    alt="article thumbnail"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article.publishedAt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Read more
                </Button>
            </CardActions>
        </Card>
    )
}
