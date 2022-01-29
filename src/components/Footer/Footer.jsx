import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Typography} from "@mui/material";
import {Favorite, Folder, LocationOn, Restore} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";

const footerStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
}))

const Footer = () => {

    const classes = footerStyles()
    const [value, setValue] = useState("recents")
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <Typography>Footer</Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<Restore/>}/>
                <BottomNavigationAction label="LocationOn" value="LocationOn" icon={<LocationOn/>}/>
                <BottomNavigationAction label="Folder" value="Folder" icon={<Folder/>}/>
                <BottomNavigationAction label="Favorite" value="Favorite" icon={<Favorite/>}/>
            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">Mobile developer blog</Typography>
        </>
    );
};

export default Footer;