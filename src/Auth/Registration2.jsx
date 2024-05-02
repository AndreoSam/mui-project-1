import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "./Registration2.css";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import { Box } from "@mui/material";

const Registration2 = () => {
  //Switch
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box className="app">
      <Paper elevation={3} style={{ padding: "10px" }}>
        {checked ? (
          <Chip
            icon={<LockIcon />}
            label="Login"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<FaceIcon />}
            label="Sign Up"
            color="primary"
            variant="outlined"
          />
        )}
        <br />
        {/*Switch */}
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        {checked ? <Login /> : <SignUp />}
      </Paper>
    </Box>
  );
};

export default Registration2;
