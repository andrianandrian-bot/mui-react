import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Layers, PlayCircleFilledOutlined} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";

const gridItemStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardGrid: {
        marginTop: 24
    },
    card: {
        backgroundColor: "red"
    },
    cardContent: {
        // backgroundColor: "red"
    }
}))

const GridItem = ({card}) => {

    const classes = gridItemStyles()

    return (
        <Grid item key={card} xs={12} sm={6} md={4} color="secondary">
            <Card className={classes.card} elevation={1}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"/>
                <CardContent className={classes.cardContent} color="secondary">
                    <Typography variant="h5" gutterBottom color="secondary">
                        Blog post
                    </Typography>
                    <Typography variant="h7" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, libero!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>

                    <Layers/>
                    <PlayCircleFilledOutlined/>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GridItem;