import React, { useEffect, useState, useHistory } from 'react';
import { Container} from '@mui/system';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/*
 * LogIn Component Function.
 */
export default function LogIn() {
    const history = useHistory;
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
    let username = 'Chris';
    let password = '123';
    let isAdminLogIn = false;

    const [responseMessage, setResponseMessage] = useState('');

    /*
     * Handle Click.
     */
    const handleOnChange = (event) => {
        event.preventDefault();

        //if (event)
        username = event.target.value;
    }
    
    /*
     * Handle Click.
     */
    const handleOnClick = async (event) => {
        event.preventDefault();

        // Log in account.
        logInAccount();
    }

    // useEffect((e) => {
    //     setResponseMessage(e.target.value);
        // if(localStorage.getItem('user-info')){
        //     history.pushState("/add")
        // }
    // }, [responseMessage]);

    /*
     * Log-in Acoount.
     */
    async function logInAccount() {
        try {
            let response = await fetch('http://localhost:8080/account/logIn', {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({ username, password, isAdminLogIn })
            });

            let responseJson = await response.json();
            // localStorage.setItem("user-info",JSON.stringify(response))
            // history.pushState("/add")
            //let data = await response;
            console.log(`RESPONSE JSON ===> ${responseJson}`);

            if (response.status === 200) {
                setResponseMessage(`JSON RESPONSE: ${JSON.stringify(responseJson)} | User logged in successfully!`);
              } else {
                setResponseMessage(`Some error occured. Status code: ${JSON.stringify(responseJson)}`);
              }
        } catch (err) {
            console.log(err);
        }
    }

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
                <TextField id="outlined-basic" label="Benutzername" variant="outlined" value={username}
                onChange={(e) => handleOnChange(e)} fullWidth />

                <TextField id="outlined-basic" label="Passwort" variant="outlined" value={password}
                onChange={(e) => handleOnChange(e)} fullWidth /> 

                <Button variant="contained" color="primary" 
                onClick={(e) => handleOnClick(e)}>
                Einloggen
                </Button>

                <p>{responseMessage ? {responseMessage} : null}</p>
            </Box>
            </Paper>
        </Container>
    );
}




// export default class LogIn extends React.Component{

//     constructor(props){
//         super(props)
    
//         this.state = {
//             username: "Chris",
//             password: "123",
//             isAdminLogIn: false,
//             message: null,
//         }
//     }
    
//     // Handle change event
//     handleChange(e) {
//         if (e.target.className === "usernameTF") {
//             this.setState({username: e.target.value});
//         } else if (e.target.className === "passwordTF") {
//             this.setState({password: e.target.value});
//         }
//     }
    
//     // Hanlde click event
//     handleClick(e) {
//         if (e.target.className === "logInBtn") {
//             e.preventDefault();
            
//             if (this.state.username && this.state.password) {
//                // Log in account.
//                 this.tryLogInAccount();
//             } else {
//                 if (!this.state.username) {
//                     console.log("Name muss eingegeben werden.");
//                     this.state.setMessage("Name muss eingegeben werden.");
//                 }
//                 if (!this.state.password) {
//                     console.log("Passwort muss eingegeben werden.");
//                     this.state.setMessage("Passwort muss eingegeben werden.");
//                 }
//             }
//         }
//     }

//     // Try logging in account
//     static async tryLogInAccount() {
//         try {
//             let username = this.state.username; 
//             let password = this.state.password; 
//             let isAdminLogIn = this.state.isAdminLogIn; 
//             let body = {username, password, isAdminLogIn};
//             let response = await fetch('http://localhost:8080/account/logIn', {
//                     method:"POST",
//                     headers:{"Content-Type":"application/json"},
//                     body:JSON.stringify(body)
//                 });

//             let responseJson = await response.json();
//             // localStorage.setItem("user-info",JSON.stringify(response))
//             // history.pushState("/add")
//             //let data = await response;
//             console.log("RESPONSE JSON ===> "+responseJson);

//             if (response.status === 200) {
//                 // setUsername("");
//                 // setPassword("");
//                 this.state.setMessage("JSON RESPONSE: " + JSON.stringify(responseJson) + " | User logged in successfully!");
//               } else {
//                 this.state.setMessage("Some error occured. Status code: " + JSON.stringify(responseJson));
//               }
//         } catch (err) {
//             console.log(err);
//             this.state.setMessage("Error: " + err);
//         }
//     }
    
//     render(){
//         const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}

//         return (<Container>
//             <Paper elevation={3} style={paperStyle}>
//                 <h1 style={{color:"blue"}}><u>Anmelden</u></h1>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& > :not(style)': { m: 1, width: '25ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField id="outlined-basic" className="usernameTF" label="Benutzername" variant="outlined" fullWidth 
//                     value={this.state.username}
//                     onChange={(e) => this.handleChange(e)} />

//                     <TextField id="outlined-basic" className="passwordTF" label="Passwort" variant="outlined" fullWidth 
//                     value={this.state.password}
//                     onChange={(e) => this.handleChange(e)} /> 

//                     <Button className="logInBtn" variant="contained" color="primary" onClick={(e) => this.handleClick(e)}>
//                         Einloggen
//                     </Button>

//                     <p>{this.state.message ? this.state.message : null}</p>
//                 </Box>
                
//             </Paper>
//         </Container> )
//     }
// }
