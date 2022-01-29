import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

const LoginModal = ({isOpen, setIsOpen}) => {

    const [loginDTO, setLoginDTO] = useState({email: '', password: ''})

    const validateFields = (event) => {
        event.preventDefault()
        if (loginDTO.email !== undefined && loginDTO.password !== undefined) {
            console.log(loginDTO.password)
            setLoginDTO({email: '', password: ''})
        }
    }

    return (
        <Dialog open={isOpen} aria-labelledby="login-form">
            <DialogTitle id="login">Log in</DialogTitle>
            <DialogContent>
                <DialogContentText>Login in to see my articles</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email address"
                    type="email"
                    fullWidth
                    value={loginDTO.email}
                    onChange={(event) => setLoginDTO({email: event.target.value})}
                    error={loginDTO.email === ''}
                    helperText={loginDTO.email === '' ? 'Empty field!' : ' '}/>
                <TextField
                    margin="dense"
                    id="password"
                    label="Your password"
                    type="password"
                    fullWidth
                    value={loginDTO.password}
                    onChange={(event) => setLoginDTO({password: event.target.value})}
                    error={loginDTO.password === ''}
                    helperText={loginDTO.password === '' ? 'Empty field!' : ' '}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={validateFields} color="primary">Login</Button>
                <Button onClick={() => setIsOpen(false)} color="primary">Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginModal;