import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MediaCardProps } from 'utils/Types';

interface componentProps {
    item: MediaCardProps
}
const MediaCard: FC<componentProps> = ({ item }) => {
    const { logo, name, treatment } = item;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={logo}
                title="logo"
            />
            <CardContent>
                <Typography sx={{ height: 70, textOverflow: "ellipsis" }} gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {treatment}
                </Typography>
            </CardContent>
            <CardActions>
                <Button style={{ color: '#f2b07e' }} size="small">Share</Button>
                <Button style={{ color: '#f2b07e' }} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard
