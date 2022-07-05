import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

function Facebooklogin() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);

    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <FacebookLogin
      appId="610098780266086"
      autoLoad={true}
      fields="name,email,picture"
      scope="public_profile,user_friends"
      callback={responseFacebook}
      icon="fa-facebook"
    />
  );
}

export default Facebooklogin;
