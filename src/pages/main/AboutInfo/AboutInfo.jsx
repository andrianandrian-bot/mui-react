import React from 'react';
import {Container, Grid, Paper, Typography, Button} from "@mui/material";
import {makeStyles} from '@mui/styles'

const aboutInfoStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: "white",
        marginBottom: 50,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundOverlay: "rgba(1,1,1,0.9)"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: 30,
        color: "white",
        marginTop: 70
    },
}))

const AboutInfo = () => {

    const classes = aboutInfoStyles()

    return (
        <Paper style={{backgroundImage: `url(https://source.unsplash.com/random)`}} className={classes.mainFeaturesPost}>
            <Container fixed>
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Mobile developer blog
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam, architecto, dolorem ducimus eum iste iure laboriosam maxime nemo neque qui sapiente tenetur veritatis vitae?
                            </Typography>
                            <Button variant="contained" color="secondary">Learn more</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default AboutInfo;