import React from "react";
import { GoogleLogin } from "react-google-login";
import classes from "./form.module.css";

const clientId =
  "491911339479-fcmdu5j4t2tvl58dpcbom51acnq4jsid.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      style={classes.google}
      isSignedIn={true}
    />
  );
};

export default Login;
