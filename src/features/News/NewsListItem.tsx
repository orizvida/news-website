import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { format } from 'date-fns'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Article } from '../../app/models/newsSource'

interface Props {
    article: Article;
    index: number;
}
export default function NewsListarticle({ article, index }: Props) {
    const nav = useNavigate();
    const getTruncatedDesc = (text: string) => {
        if (text) {
            if (text.length > 80) return text.substring(0, 80);
        }
        return text;
    }
    return (
        <Card
            onClick={() => nav(`/article/${index}`)}
            sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={article.urlToImage || 'https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'}
                    alt="article thumbnail"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article?.publishedAt && format(new Date(article?.publishedAt), 'MM/dd/yyyy')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {getTruncatedDesc(article.description)}
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
