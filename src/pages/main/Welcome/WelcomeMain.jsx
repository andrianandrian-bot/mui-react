import React from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";

const WelcomeMain = () => {
    return (
        <div>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Mobile developer blog</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem ea error fugiat in inventore maiores mollitia, nihil nobis nostrum quibusdam quod temporibus voluptas voluptates?</Typography>
                <div>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="secondary">Start now!</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="secondary">Learn more</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default WelcomeMain;