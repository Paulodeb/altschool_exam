import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";



export function RegForm() {
  const { login, setCurrentUser, setEmail, email} = useAuth();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]  = useState('')
  // const [email, setEmail]  = useState('')
  const [password, setPassword]  = useState('')
  const [showPassword, setShowPassword] = useState(false)
  let navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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


  const canLogin =
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "";
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={modalStyles.inputFields}>
          <Box>

            <Typography gutterBottom variant="h5" align="center" component='div'>Register</Typography>
            
          </Box>
          <FormControl fullWidth variant='outlined'>
            <TextField
              label='First Name'
              required
              name="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <TextField
              label='Last Name'
              required
              name="lastname"
              value={lastName}
              placeholder="Last Name"
              onChange={e => setLastName(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <TextField
              label='E-mail'
              required
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
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
            label="Password"
          />
        </FormControl>
        <LoginButton
          disabled={!canLogin}
          onClick={() => {
            setCurrentUser({ name: firstName + " " + lastName  });
            setEmail({ email: email });
            setPassword({ password: password });
            navigate("/dashboard");
            login();
          }}
        >
          Sign Up
        </LoginButton>
        {!canLogin && <p>Please fill out all fields.</p>}
        <CardActions>
        <Typography variant="subtitle1" color='text.secondary' component='div'>Already Registered?</Typography>
        <Button variant="outlined" size="small">
          <NavLink to="/login">Login</NavLink>
        </Button>
        </CardActions>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export function LoginButton({ children, onClick, disabled }) {
  return (
    <Button variant="contained" onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}
