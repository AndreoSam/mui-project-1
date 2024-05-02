import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  //Password Field
  const [showPassword, setShowPassword] = React.useState(false);

  //Inputs
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState();

  //Input errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //Input validation
  const [formvalid, setFormvalid] = useState();
  const [success, setSuccess] = useState();

  //show password icon
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //validation for email
  const isEmail = (email) =>
    /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/i.test(email);

  const handleEmail = () => {
    if (!isEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  //validation for password
  const isPassword = (pass) =>
    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$/i.test(pass);

  const handlePassword = () => {
    if (!isPassword(password)) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  //submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(null);
    if (emailError || !email) {
      setFormvalid("Email is invalid. Pleae re-enter.");
      return;
    }
    if (passwordError || !password) {
      setFormvalid(
        "Invalid Password: Minimum length of 8 characters. Include at least one uppercase letter, lowercase letter, number. special character (e.g., !, @, #, $)."
      );
      return;
    }
    setFormvalid(null);
    setSuccess("Signup successful.");

    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Remember me: ", remember);

  };

  return (
    <div className="signup">
      
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          error={emailError}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={handleEmail}
          variant="standard"
          fullWidth
          size="small"
        />

        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            error={passwordError}
            htmlFor="standard-adornment-password"
          >
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            error={passwordError}
            onChange={(event) => setPassword(event.target.value)}
            onBlur={handlePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      
      <div align="left">
        <Checkbox
          onChange={(event) => setRemember(event.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
        Remember me
      </div>

      
        <Button
          onClick={handleSubmit}
          variant="contained"
          startIcon={<LoginIcon />}
          fullWidth
        >
          Sign Up
        </Button>
      
      <p>{formvalid && <Alert severity="error">{formvalid}</Alert>}</p>
      <p>{success && <Alert severity="success">{success}</Alert>}</p>
    </div>
  );
};

export default Login;
