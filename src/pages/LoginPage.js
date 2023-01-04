import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, authSuccess, authFailure } from '../redux/reducers/auth';
import {userLogin} from '../api/authenticationService';
import { Container} from '@mui/system';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loginpage.css';

const LoginPage = function loginPage() {
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const dispatch = useDispatch();
    
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const user = useSelector((state) => state.auth.user);
    const setUser = (data) => { dispatch(authSuccess(data)) };
    const loginFailure = (message) => { dispatch(authFailure(message)) };

    const [values, setValues] = useState({ username: '', password: '', isAdminLogIn: false });

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(authenticate());

        userLogin(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                setUser(response.data);
                dispatch.history.push('/dashboard');
            } else {
                loginFailure('Something Wrong!Please Try Again'); 
            }


        }).catch((err)=>{

            // if(err && err.response) {
            // +
            //     switch(err.response.status){
            //         case 401:
            //             console.log("401 status");
            //             loginFailure("Authentication Failed. Bad Credentials");
            //             break;
            //         default:
            //             loginFailure('Something Wrong! Please Try Again'); 

            //     }
            // } else {
            //     loginFailure('Something Wrong!Please Try Again');
            // }
                

            

        });
    }

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({
        ...values,
        [event.target.name]: event.target.value
        }));
    };

    console.log("Loading ",loading);

    return (
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <h1 style={{color:"blue"}}><u>Anmelden</u></h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Benutzername" variant="outlined" value={values.username}
                        onChange={(e) => handleChange(e)} fullWidth />

                        <TextField id="outlined-basic" label="Passwort" variant="outlined" value={values.password}
                        onChange={(e) => handleChange(e)} fullWidth /> 

                        <Button variant="contained" color="primary" 
                        onClick={(e) => handleSubmit(e)}>
                        Einloggen
                        </Button>

                        <p>{loading ? loading : null}</p>
                        <p>{error ? error : null}</p>
                        <p>{JSON.stringify(user)}</p>
                    </Box>
                </Paper>
            </Container>
    )
 
}

export default LoginPage;