import * as React from "react";
import styles from "./joinClubForm.module.css";
import validator from "validator";

interface emailError {
  emailIsEmpty: boolean;
  emailType: boolean;
}

export const JoinTheClubForm: React.FunctionComponent = () => {
  const [email, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<emailError>({
    emailIsEmpty: false,
    emailType: false,
  });
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (validation(email)) {
      alert(`Your email : ${email}`);
    }
  };
  const validation: (email: string) => boolean = (email) => {
    const error = {
      emailIsEmpty: validator.isEmpty(email),
      emailType: !validator.isEmail(email),
    };
    setEmailError(error);
    return !error.emailIsEmpty && !error.emailType;
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`input-group mb-3 mt-5 mx-auto ${styles.inputHolder}`}>
        <input
          type="text"
          className={`form-control ${styles.emailInput}`}
          placeholder="YOUR E-MAIL"
          aria-describedby="button-addon2"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className={`btn btn-primary ${styles.submitButton}`}
          type="submit"
          id="button-addon2"
        >
          {">"}
        </button>
      </div>
      {emailError.emailIsEmpty && (
        <small className="text-danger d-block text-center mt-1">
          Enter your email
        </small>
      )}
      {emailError.emailType && (
        <small className="text-danger d-block text-center mt-1">
          Invalid email address
        </small>
      )}
    </form>
  );
};
