import React from "react";
import { useRef, useState } from "react";
import classes from "./form.module.css";

const isEmpty = (value) =>
  // will return true if empty
  value.trim() === "";

const isNotFiveDigits = (value) =>
  // return true if it's not five chars long
  value.trim().length !== 5;

const Register = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const firstNameInputRef = useRef();
  const middleNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const address1InputRef = useRef();
  const address2InputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  // we got the event object here as we wired the confirmHandler with form onSubmit
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isNotFiveDigits(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    // submit the form
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  const nameControlClasses = ` ${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = ` ${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const socialControlClasses = ` ${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;
  const phoneControlClasses = ` ${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="first-name">Your First Name</label>
        <input ref={firstNameInputRef} type="text" id="first-name" required />
        {!formInputsValidity.firstName && <p>Name Cannot be empty!</p>}
      </div>
      <div className={nameControlClasses}>
        <label htmlFor="middle-name">Your Middle Name</label>
        <input ref={middleNameInputRef} type="text" id="middle-name" required />
        {!formInputsValidity.middleName && <p>Name Cannot be empty!</p>}
      </div>
      <div className={nameControlClasses}>
        <label htmlFor="last-name">Your Last Name</label>
        <input ref={lastNameInputRef} type="text" id="last-name" required />
        {!formInputsValidity.lastName && <p>Name Cannot be empty!</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="phone">Phone Number</label>
        <input ref={phoneInputRef} type="text" id="phone" required />
        {!formInputsValidity.Phone && <p>phone number is not valid!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="address1">Address 1</label>
        <input ref={address1InputRef} type="text" id="address1" required />
        {!formInputsValidity.Address1 && <p>Address Cannot be empty!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="address2">Address 2</label>
        <input ref={address2InputRef} type="text" id="address2" required />
        {!formInputsValidity.Address2 && <p>Address Cannot be empty!</p>}
      </div>

      <div className={socialControlClasses}>
        <label htmlFor="Linkedin">Linkedin Profile Link</label>
        <input ref={socialInputRef} type="text" id="Linkedin" required />
        {!formInputsValidity.Linkedin && <p>Cannot be empty!</p>}
      </div>
      <div className={socialControlClasses}>
        <label htmlFor="Twitter">Twitter Profile Link</label>
        <input ref={socialInputRef} type="text" id="Twitter" required />
        {!formInputsValidity.Twitter && <p>Cannot be empty!</p>}
      </div>
      <div className={socialControlClasses}>
        <label htmlFor="Facebook">Twitter Profile Link</label>
        <input ref={socialInputRef} type="text" id="Facebook" required />
        {!formInputsValidity.Facebook && <p>Cannot be empty!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Register;
