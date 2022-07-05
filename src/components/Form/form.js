import React from "react";
import useInput from "../../hooks/user-input";
import classes from "./form.module.css";
import validator from "validator";

const Registeration = (props) => {
  const options = [
    {
      id: "1",
      label: "Course1",
      value: "course1",
    },
    {
      id: "2",
      label: "Course2",
      value: "course2",
    },
    {
      id: "3",
      label: "Course3",
      value: "course3",
    },
    {
      id: "4",
      label: "Course4",
      value: "course",
    },
  ];
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredMiddleName,
    hasError: middleNameInputHasError,
    isValid: enteredMiddleNameIsValid,
    valueChangeHandler: middleNameChangeHandler,
    inputBlurHandler: middleNameBlurHandler,
    reset: resetMiddleNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPhoneNumber,
    hasError: phoneNumberInputHasError,
    isValid: enteredPhoneNumberIsValid,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumberInput,
  } = useInput((value) => validator.isMobilePhone(value));
  const {
    value: enteredNationalId,
    hasError: nationalIdInputHasError,
    isValid: enteredNationalIdIsValid,
    valueChangeHandler: nationalIdChangeHandler,
    inputBlurHandler: nationalIdBlurHandler,
    reset: resetNationalIdInput,
  } = useInput((value) => value.trim().length !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => validator.isEmail(value));
  const {
    value: enteredAddress1,
    hasError: address1InputHasError,
    isValid: enteredAddress1IsValid,
    valueChangeHandler: address1ChangeHandler,
    inputBlurHandler: address1BlurHandler,
    reset: resetAddress1Input,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredAddress2,
    hasError: address2InputHasError,
    isValid: enteredAddress2IsValid,
    valueChangeHandler: address2ChangeHandler,
    inputBlurHandler: address2BlurHandler,
    reset: resetAddress2Input,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLinkedin,
    hasError: linkedinInputHasError,
    isValid: enteredLinkedinIsValid,
    valueChangeHandler: linkedinChangeHandler,
    inputBlurHandler: linkedinBlurHandler,
    reset: resetLinkedinInput,
  } = useInput((value) => value.includes("linkedin"));
  const {
    value: enteredTwitter,
    hasError: twitterInputHasError,
    isValid: enteredTwitterIsValid,
    valueChangeHandler: twitterChangeHandler,
    inputBlurHandler: twitterBlurHandler,
    reset: resetTwitterInput,
  } = useInput((value) => value.includes("twitter"));
  const {
    value: enteredFacebook,
    hasError: facebookInputHasError,
    isValid: enteredFacebookIsValid,
    valueChangeHandler: facebookChangeHandler,
    inputBlurHandler: facebookBlurHandler,
    reset: resetFacebookInput,
  } = useInput((value) => value.includes("facebook"));
  const { value: enteredCourses, valueChangeHandler: coursesChangeHandler } =
    useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredMiddleNameIsValid &&
    enteredLastNameIsValid &&
    enteredPhoneNumberIsValid &&
    enteredNationalIdIsValid &&
    enteredEmailIsValid &&
    enteredAddress1IsValid &&
    enteredAddress2IsValid &&
    enteredFacebookIsValid &&
    enteredLinkedinIsValid &&
    enteredTwitterIsValid
  ) {
    formIsValid = true;
  }

  const firstNameInputClass = firstNameInputHasError ? "form invalid" : "form";
  const middleNameInputClass = firstNameInputHasError ? "form invalid" : "form";
  const lastNameInputClass = firstNameInputHasError ? "form invalid" : "form";
  const phoneNumberInputClass = firstNameInputHasError
    ? "form invalid"
    : "form";
  const nationalIdInputClass = firstNameInputHasError ? "form invalid" : "form";
  const emailInputClass = firstNameInputHasError ? "form invalid" : "form";
  const address1InputClass = firstNameInputHasError ? "form invalid" : "form";
  const address2InputClass = firstNameInputHasError ? "form invalid" : "form";
  const linkedinInputClass = firstNameInputHasError ? "form invalid" : "form";
  const facebookInputClass = firstNameInputHasError ? "form invalid" : "form";
  const twitterInputClass = firstNameInputHasError ? "form invalid" : "form";

  // we got the event object here as we wired the confirmHandler with form onSubmit
  const submitRegisterHandler = (event) => {
    event.preventDefault();

    // submit the form
    props.onConfirm({
      firstName: enteredFirstName,
      middleName: enteredMiddleName,
      lastName: enteredLastName,
      phone: enteredPhoneNumber,
      nationalId: enteredNationalId,
      email: enteredEmail,
      address1: enteredAddress1,
      address2: enteredAddress2,
      linkedin: enteredLinkedin,
      facebook: enteredFacebook,
      twitter: enteredTwitter,
      courses: enteredCourses,
    });

    resetFirstNameInput();
    resetMiddleNameInput();
    resetLastNameInput();
    resetPhoneNumberInput();
    resetNationalIdInput();
    resetAddress1Input();
    resetAddress2Input();
    resetEmailInput();
    resetLinkedinInput();
    resetFacebookInput();
    resetTwitterInput();
  };

  return (
    <form className={classes.form} onSubmit={submitRegisterHandler}>
      <div className={classes.title}>Registration Form</div>
      <div className={firstNameInputClass}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={enteredFirstName}
        />
        {firstNameInputHasError && (
          <p className="error-text">enter first name</p>
        )}
      </div>
      <div className={middleNameInputClass}>
        <label htmlFor="name">Middle Name</label>
        <input
          type="text"
          id="name"
          onChange={middleNameChangeHandler}
          onBlur={middleNameBlurHandler}
          value={enteredMiddleName}
        />
        {middleNameInputHasError && (
          <p className="error-text">enter middle name</p>
        )}
      </div>
      <div className={lastNameInputClass}>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={enteredLastName}
        />
        {lastNameInputHasError && <p className="error-text">enter last name</p>}
      </div>
      <div className={phoneNumberInputClass}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
          value={enteredPhoneNumber}
        />
        {phoneNumberInputHasError && (
          <p className="error-text">not a phone number</p>
        )}
      </div>
      <div className={nationalIdInputClass}>
        <label htmlFor="nationalId">National Id</label>
        <input
          type="text"
          id="nationalId"
          onChange={nationalIdChangeHandler}
          onBlur={nationalIdBlurHandler}
          value={enteredNationalId}
        />
        {nationalIdInputHasError && (
          <p className="error-text">National Id not valid</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email not valid</p>}
      </div>
      <div className={address1InputClass}>
        <label htmlFor="address"> Address 1</label>
        <input
          type="text"
          id="address"
          onChange={address1ChangeHandler}
          onBlur={address1BlurHandler}
          value={enteredAddress1}
        />
        {address1InputHasError && (
          <p className="error-text">Address 1 not valid</p>
        )}
      </div>
      <div className={address2InputClass}>
        <label htmlFor="address"> Address 2</label>
        <input
          type="text"
          id="address"
          onChange={address2ChangeHandler}
          onBlur={address2BlurHandler}
          value={enteredAddress2}
        />
        {address2InputHasError && (
          <p className="error-text">Address 2 not valid</p>
        )}
      </div>
      <div className={linkedinInputClass}>
        <label htmlFor="link"> Linkedin</label>
        <input
          type="text"
          id="link"
          onChange={linkedinChangeHandler}
          onBlur={linkedinBlurHandler}
          value={enteredLinkedin}
        />
        {linkedinInputHasError && (
          <p className="error-text">Linkedin not valid</p>
        )}
      </div>
      <div className={twitterInputClass}>
        <label htmlFor="link"> Twitter</label>
        <input
          type="text"
          id="link"
          onChange={twitterChangeHandler}
          onBlur={twitterBlurHandler}
          value={enteredTwitter}
        />
        {twitterInputHasError && (
          <p className="error-text">Twitter not valid</p>
        )}
      </div>
      <div className={facebookInputClass}>
        <label htmlFor="link"> Facebook</label>
        <input
          type="text"
          id="link"
          onChange={facebookChangeHandler}
          onBlur={facebookBlurHandler}
          value={enteredFacebook}
        />
        {facebookInputHasError && (
          <p className="error-text">Facebook not valid</p>
        )}
      </div>
      <div className="select-container">
        <label htmlFor="Courses"> Courses List</label>
        <select onChange={coursesChangeHandler}>
          {options.map((option) => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Registeration;
