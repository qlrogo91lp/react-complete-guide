import { useEffect, useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    
    // const [formIsValid, setFormIsValid] = useState(false);

    // State가 변함에 따라 reevaluated 되서 latest 값을 유지
    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    // useEffect(() => {
    //   if (enteredNameIsValid) {
    //     setFormIsValid(true);
    //   } else {
    //     setFormIsValid(false);
    //   }
    // }, [enteredNameIsValid]);

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = event => {
      setEnteredEmail(event.target.value);
    };

    const nameInputBlurHandler = event => {
      setEnteredNameTouched(true);
    };

    const emailInputBlurHandler = event => {
      setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
          return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredName("");
        setEnteredNameTouched(false);

        setEnteredEmail('');
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler} // when losing focus 
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler} // when losing focus 
                    value={enteredEmail}
                />
                {emailInputIsInvalid && <p className="error-text">Please enter a valid email.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
