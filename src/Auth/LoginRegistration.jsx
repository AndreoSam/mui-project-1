import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Face6Icon from "@mui/icons-material/Face6";
import { ori_base_url, login_endpoint } from "../api/api_url";
import "./Registration.css";

const LoginRegistration = () => {
  let api_url = ori_base_url + login_endpoint;
  // console.log("API url is: ", api_url);
  // let navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  });

  //Submit Button:
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Values: ", state);

    let formData = new FormData();
    formData.append("email", state.email);
    formData.append("password", state.password);

    axios
      .post(api_url, formData, {
        headers: {
          Content_Type: "application/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("Axios Receieved: ", res);
        setState(res.data);
        if(res.data.status == 200){
        window.sessionStorage.setItem("token", res.data.token);}else{
            alert("Login failed!")
        }
      })
      .catch((err) => {
        console.log("Axios Error:", err);
      });
  };

  //Validation:
  const handleChange = (event) => {
    let err = state.error;
    event.persist();
    let { name, value } = event.target;

    switch (name) {
      case "email":
        if (!value || value.length < 5 || value.length > 20) {
          err.email = "Enter valid email id!";
        } else {
          err.email = "";
        }
        break;

      case "password":
        if (!value || value.length < 5 || value.length > 20) {
          err.password =
            "Invalid Password: Minimum length of 8 characters. Include at least one uppercase letter, lowercase letter, number. special character (e.g., !, @, #, $).";
        } else {
          err.password = "";
        }
        break;

      default:
        console.log("Not applicable");

        setState({ ...state, [name]: value, errors: err });
        console.log("Submitted Values: ", state);
    }
  };

  return (
    <div className="form_reg">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Password"
          name="password"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<Face6Icon />}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginRegistration;
