import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Face6Icon from "@mui/icons-material/Face6";
import { ori_base_url, reg_endpoint } from "../api/api_url";
import "./Registration.css";

const Registration = () => {
  let api_url = ori_base_url + reg_endpoint;
  // console.log("API url is: ", api_url);
  // let navigate = useNavigate();

  // const isEmail = `^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$`;
  // const isPassword = `^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$`;

  const [img, setImg] = useState({});
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    // confirm_password: "",
    error: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      // confirm_password: "",
    },
  });

  //Submit Button:
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Values: ", state, img);

    let formData = new FormData();
    formData.append("first_name", state.first_name);
    formData.append("last_name", state.last_name);
    formData.append("email", state.email);
    formData.append("password", state.password);
    formData.append("profile_pic ", img);

    axios
      .post(api_url, formData, {
        headers: {
          "Content_Type": "application/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("Axios Receieved: ", res);
        setState(res.data);
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
      case "first_name":
        if (!value || value.length < 5 || value.length > 20) {
          err.first_name =
            "first should be 5 - 15 characters and shouldn't include any special characters!";
        } else {
          err.first_name = "";
        }
        break;

      case "last_name":
        if (!value || value.length < 5 || value.length > 20) {
          err.last_name =
            "last name should be 5 - 15 characters and shouldn't include any special characters!";
        } else {
          err.last_name = "";
        }
        break;

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

      // case "confirm_password":
      //   if (value === value(password)) {
      //     err.confirm_password = "Password match!";
      //   } else {
      //     err.confirm_password = "Password doesn't match!";
      //   }
      //   break;
      default:
        console.log("Not applicable");

        setState({ ...state, [name]: value, errors: err });
        console.log("Submitted Values: ", state, img);
    }
  };

  //image submission:
  const setImgState = (file) => {
    console.log(file);
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      console.log("Image: ", fileReader.result);
      setImg(fileReader.result);
    });
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="form_reg">
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="first_name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Last Name"
          name="last_name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />

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

        {/* <TextField
          label="Confirm Password"
          name="confirm_password"
          onBlur={handleChange}
          variant="outlined"
          fullWidth
        /> */}

        <TextField
          type="file"
          label="Add Image"
          accept="image/*"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(event) => setImgState(event.target.files[0])}
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

export default Registration;
