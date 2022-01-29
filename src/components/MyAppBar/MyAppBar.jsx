import React from 'react';
import {AppBar, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import AuthButtons from "../UI/AuthButtons";
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}))

const MyAppBar = ({openModal}) => {

    const classes = useStyles()

    return (
        <AppBar elevation={0} position="fixed">
            <Container>
                <Toolbar color="primary">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        <Menu/>
                    </IconButton>

                    <Typography
                        variant="h6"
                        className={classes.title}>
                        Mobile developer blog
                    </Typography>

                    <AuthButtons openModal={openModal}/>
                </Toolbar>

            </Container>
        </AppBar>
    );
};

export default MyAppBar;