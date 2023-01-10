import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../Context/AuthContext";
import NotFound from "./NotFound/NotFound";
import styles from "./userprofile.css";

export default function UserProfile() {
  const { currentUser, email, LoggedIn } = useAuth();
  
  return LoggedIn ? (
    <Card sx={{minWidth: 275}}>

    <CardContent>
      <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>Your Profile</Typography>
      <Typography >
        Name : {currentUser.username || currentUser.name}
      </Typography>
      <div className={styles.text3}>Email : {email.email}</div>
    </CardContent>
    
    </Card>
  ) : (
    <>
      <NotFound />
    </>
  );
}
