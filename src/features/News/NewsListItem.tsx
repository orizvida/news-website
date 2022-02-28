import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { format } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../../app/models/newsSource'

interface Props{
    article:Article;
    index:number;
}
export default function NewsListarticle({article,index}:Props) {
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
                    {article?.publishedAt && format(new Date(article?.publishedAt), 'yyyy-mm-dd')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                component={Link}
                to={`/article/${index}`}
                size="small" color="primary">
                    Read more
                </Button>
            </CardActions>
        </Card>
    )
}
