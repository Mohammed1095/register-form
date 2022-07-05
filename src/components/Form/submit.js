import { Fragment } from "react";
import Registeration from "./form";

const Submit = (props) => {
  const submitRegisterHandler = async (userData) => {
    await fetch(
      "https://registerationform-96fad-default-rtdb.firebaseio.com/Submitions.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
        }),
      }
    );
  };

  return (
    <Fragment>
      <Registeration
        onConfirm={submitRegisterHandler}
        onCancel={props.onClose}
      />
    </Fragment>
  );
};

export default Submit;
