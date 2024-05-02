import React, { useState } from "react";
import { base_url, user_url } from "../api/api_url";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./MuiButton.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const MuiButton = () => {
  let api_url = base_url + user_url;
  let [state, setState] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    confirm_password: "",
    gender: "",
    errors: {
      first_name: "",
      last_name: "",
      user_name: "",
      password: "",
      gender: "",
    },
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h1 style={{ color: "blue", fontWeight: "bold", fontSize: "50px" }}>
        Registration
      </h1>
      <form className="form_reg">
        <h3>Create a new account</h3>
        <p>It's quick and easy.</p>
        <hr />
        <label>First Name:</label>
        <input type="text" name="fname" placeholder="First Name" />
        <label>Last Name:</label>
        <input type="text" name="lname" placeholder="last Name" />
        <label>User Name:</label>
        <input type="text" name="uname" placeholder="User Name" />
        <label>Password:</label>
        <input type="text" name="uname" placeholder="New Password" />
        <label>Confirm Password:</label>
        <input type="text" name="uname" placeholder="Confirm Password" />

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              placeholder="First name"
            />
          </div>
        </Box>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            /> */}
          </RadioGroup>
        </FormControl>
        <br />
        <Button variant="contained" color="success">
          Contained
        </Button>
      </form>
      <Stack spacing={5} direction="row">
        <Button variant="text">Text</Button>

        <Button variant="outlined" color="warning">
          Outlined
        </Button>
      </Stack>
    </div>
  );
};

export default MuiButton;
