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
    firstName: true,
    middleName: true,
    lastName: true,
    address1: true,
    address2: true,
    social: true,
    phone: true,
  });

  const firstNameInputRef = useRef();
  const middleNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const address1InputRef = useRef();
  const address2InputRef = useRef();
  const phoneInputRef = useRef();
  const socialInputRef = useRef();

  // we got the event object here as we wired the confirmHandler with form onSubmit
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredMiddleName = middleNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAdress1 = address1InputRef.current.value;
    const enteredAdress2 = address2InputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredSocial = socialInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredMiddleNameIsValid = !isEmpty(enteredMiddleName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredAdress1IsValid = !isEmpty(enteredAdress1);
    const enteredAdress2IsValid = !isEmpty(enteredAdress2);
    const enteredPhoneIsValid = !isNotFiveDigits(enteredPhone);
    const enteredSocialIsValid = !isEmpty(enteredSocial);

    setFormInputsValidity({
      firstName: enteredFirstNameIsValid,
      middleName: enteredMiddleNameIsValid,
      lastName: enteredLastNameIsValid,
      address1: enteredAdress1IsValid,
      address2: enteredAdress2IsValid,
      social: enteredSocialIsValid,
      phone: enteredPhoneIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredMiddleNameIsValid &&
      enteredLastNameIsValid &&
      enteredAdress1IsValid &&
      enteredAdress2IsValid &&
      enteredSocialIsValid &&
      enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }

    // submit the form
    props.onConfirm({
      firstName: enteredFirstName,
      middleName: enteredMiddleName,
      lastName: enteredLastName,
      address1: enteredAdress1,
      address2: enteredAdress2,
      social: enteredSocial,
      phone: enteredPhone,
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
