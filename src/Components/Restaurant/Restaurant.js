import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Restaurant = (props) => {
    const {strMeal, strMealThumb, strInstructions} = props.item;
    return (
        <div>  
            <Card sx={{ maxWidth: 345, pb: 3 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={strMealThumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {strInstructions.slice(0,150)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{ml: 15}} size="small">Details</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Restaurant;