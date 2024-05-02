import React, { useEffect, useState } from "react";
import { ori_base_url, profile_endpoint } from "../api/api_url";
import axios from "axios";

const Profile = () => {
  let api_url = ori_base_url + profile_endpoint;
  console.log("api url is: ", api_url);

  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    image: "",
  });

  const token = window.sessionStorage.getItem("token"); //find the exact user to show

  useEffect(() => {
    axios
      .get(api_url, {
        headers: {
          "x-access-token": token,
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("Profile Axios: ", res.data);
        if(res.data.status == 200){
            let folder_path = "uploads/user/profile_pic/";
            let img_path = ori_base_url + folder_path + res.data.data.profile_pic;
            // console.log(img_path);
            setState(
              ...state,
              fname: data.data.first_name,
              lname: data.data.last_name,
              email: data.data.email,
              image: img_path
            );
        }
      })
      .catch((err) => {
        console.log("Profile Error: ", err);
      });
  });

  return <div>Profile</div>;
};

export default Profile;
