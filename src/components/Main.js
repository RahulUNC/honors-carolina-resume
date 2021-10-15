import { AppBar, Toolbar, TextField, Button, Typography, IconButton, Modal, Box} from "@mui/material"
import { Home } from  "@mui/icons-material"
import React from "react";
import axios from "axios";

export default function Main() {
    const [auth, setAuth] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const loginOpen = () =>  setOpenModal(true);
    const loginClose = () => setOpenModal(false);

    const logIn = () => {setAuth(true)};
    const logOut = () => {
        setAuth(false);
    };

    const getData = () => {
        axios.get("http://node-mongodb-sample-git-rnarveka.apps.cloudapps.unc.edu/resumes").then(res => {
            console.log(res.data)
        })
    }

    const modalSubmit = () => { 
        loginClose(); 
        logIn();
        getData();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        '& > :not(style)': { m: 1, width: '25ch' }
    };

    return (
        <div>
            <header>
                <AppBar>
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><Home/></IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow : 1}}>
                            Honors Carolina Resume App
                        </Typography>
                        <Button onClick={!auth? loginOpen : logOut} color= "inherit">{auth? "Logout" : "Login"}</Button>
                    </Toolbar>
                </AppBar>
               <h1>Logged In</h1>
                <Modal open={openModal} onClose={loginClose}>
                    <Box sx={style} component="form">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Login
                        </Typography>
                        <TextField id="user" label="Username" variant="outlined" />
                        <TextField id="pass" label="Password" variant="outlined" type="password"/>
                            <Button onClick={modalSubmit} color = "inherit">Login</Button>
                    </Box>
                </Modal>
            </header>
        </div>
    )
}