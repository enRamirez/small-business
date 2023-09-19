import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import styles from './login.module.css';

export default function Login({ user, userLogin }) {
  console.log('user:', user);
  
  const handleLogin = (e) => {
    e.preventDefault();

    document.cookie = "loggedIn=true";
    window.location.replace("/");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <TextField
          name="username"
          label="Username"
          type="text"
        />
        <TextField
          name="password"
          label="Password"
          type="password" />
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: 25, fontWeight: "bold" }}>
        Login</Button>
      </form>
    </div>
  )
}