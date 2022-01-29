import React from 'react';
import {Button, Stack} from "@mui/material";

const AuthButtons = ({openModal}) => {
    return (
        <Stack spacing={1} direction="row">
            <Button color="inherit" variant="outlined" onClick={() => openModal(true)}>Log in</Button>
            <Button variant="contained">Sign Up</Button>
        </Stack>
    );
};

export default AuthButtons;