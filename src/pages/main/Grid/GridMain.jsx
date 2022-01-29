import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid} from "@mui/material";
import {Layers, PlayCircleFilledOutlined} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
import GridItem from "./GridItem";

const mainGridStyles = makeStyles((theme) => ({
    cardGrid: {
        marginTop: 24
    },
}))

const GridMain = ({cards}) => {

    const classes = mainGridStyles()

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <GridItem card={card}/>
                ))}
            </Grid>
        </Container>
    );
};

export default GridMain;