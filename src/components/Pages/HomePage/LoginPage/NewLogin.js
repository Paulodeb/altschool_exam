import React, { useState } from "react";
import { useAuth } from "../../../Context/AuthContext";
import { LoginButton } from "../Registration/RegForm";
import { NavLink, useNavigate } from "react-router-dom";
import NewUserModal from "../../../common/BasicModal/NewUserModal";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Box, TextField, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, 
  Card, CardContent, CardActions, Typography, Button} from '@mui/material';
import { userDetails } from "./userDetails";

function NewLogin() {
  const modalStyles = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiFormControl-root": {
        marginBottom: "10px"
      }
    }
  };

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const [userName, setUserName] = useState('')
  const { login, setCurrentUser, setEmail, setPassword, password, email } = useAuth();
  // const { handleChange, values } = useFormHook(NewLogin);
  let navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const validationSchema = Yup.object().shape({
  //   userName: Yup.string()
  //   .required('Please enter your username')
  //   .min(6, "userName must be at least 6 characters"),
  //   email: Yup.string()
  //   .required('Please enter your email')
  //   .email('Please enter a valid email'),
  //   password: Yup.string()
  //   .required('Please enter your password')
  //   .min(6, "password must be at least 6 characters"),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // })

  // const addUser = (data) => {
  //   console.log(data);
  // };



  const canLogin =
  userDetails.find((value) => value.username === userName && value.password === password && value.email === email) 
    
  return (
    <Card sx= {{ minWidth: 275 }}>
      <CardContent>
      <Box sx={modalStyles.inputFields}>
        <Box>

        <Typography gutterBottom variant="h5" component='div' align="center">
          Login
        </Typography>
          {!canLogin && (
            <Typography variant='body1' color='text.secondary'>
            Please fill out all fields.
            </Typography>
          )}
        </Box>
      <CardActions>
            <Typography variant='body1' color='text.secondary' align="center">
            Login details: <br />
            username: altschool <br />
            password: altschool <br />
            email: altschool@gmail
            </Typography>
          
          </CardActions>
        <FormControl fullWidth  variant="outlined">
          <TextField
            label='Username'
            name="username"
            placeholder="username"
            value={userName}
            onChange={e=> setUserName(e.target.value)}

            required
            // {...register('userName')}
            // error={errors.userName ? true : false}
            // helperText={errors.userName === true ? "Kindly enter your username" : null }
          />
          
        </FormControl>
        
        <FormControl fullWidth variant="outlined">

          <TextField
            name="email"
            label='E-mail'
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e=> setEmail(e.target.value)}
            required
            // {...register('email')}
            // error={errors.email ? true : false}
            // helperText={errors.email === true ? "Kindly enter your email" : null }
          />
        </FormControl>
      
      <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password"
              placeholder="password"
              required
          >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="password"
            value={password}
            onChange={e=> setPassword(e.target.value)}
            label="Password"

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
        {/* <button
          onClick={(e) => {
            setOpen(true);
            e.preventDefault();
          }}
        >jhh</button> */}
        <LoginButton
          disabled={!canLogin}
          onClick={() => {
            
            setCurrentUser({ name: userName });
            setEmail({ email: email });
            setPassword({ password: password });
            navigate("/dashboard");
            login();
          }}
        >
          Log in
        </LoginButton>
        <CardActions>
        <Typography variant='subtitle1' color='text.secondary' align="center" >Not Registered?</Typography>
        <Button variant="outlined" size="small" >
          <NavLink to="/register">Sign Up</NavLink>
        </Button>
        <NewUserModal open={open} onClose={() => setOpen(false)} />
        </CardActions>
      </Box>
      </CardContent>
    </Card>
  );
}

export default NewLogin;
