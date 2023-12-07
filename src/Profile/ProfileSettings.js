import { Avatar, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export default function ProfileSettings() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteAvatar = () => {
    setAvatar("");
  };

  return (
    <Grid container>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      />
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Grid
          item
          xs={12}
          sx={{
            mt: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="avatar-upload"
            type="file"
            onChange={handleAvatarChange}
          />
          <label htmlFor="avatar-upload">
            <Avatar
              alt="Avatar"
              src={avatar}
              sx={{ width: 150, height: 150 }}
            />
          </label>

          {avatar && (
            <Button onClick={() => deleteAvatar()}>Delete Avatar</Button>
          )}
        </Grid>
        <Grid item xs={12} mt={10}>
          <TextField
            label="Change Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            sx={{ backgroundColor: "white", width: "35%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Change Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ backgroundColor: "white", mt: 10, width: "35%" }}
          />
        </Grid>
        <Grid item xs={12} mt={10}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      />
    </Grid>
  );
}
