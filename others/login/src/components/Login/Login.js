import React, { useEffect, useReducer, useState, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.val, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        };
    }, []);

    // Destructuring (ES6)
    // 전체 개체 대신 특정 속성을 종속성으로 전달하기 위해
    // validity가 이미 true가 됐을때 다른 문자를 입력했을때 다시 체크하지 않음
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            // setFormIsValid(emailState.isValid && passwordState.isValid)
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });

        // 다른 상태값을 참조함
        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });

        // 다른 상태값을 참조함
        // setFormIsValid(
        //   emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
          authCtx.onLogin(emailState.value, passwordState.value);  
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
        } else {
          passwordInputRef.current.focus();
        }
        
    };

    return (
      <Card className={classes.login}>
          <form onSubmit={submitHandler}>
              <Input
                  ref={emailInputRef}
                  id="email"
                  label="E-Mail"
                  type="email"
                  isValid={emailIsValid}
                  value={emailState.value}
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}
              ></Input>
              <Input
                  ref={passwordInputRef}
                  id="password"
                  label="Password"
                  type="password"
                  isValid={passwordIsValid}
                  value={passwordState.value}
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}
              ></Input>
              <div className={classes.actions}>
                  <Button type="submit" className={classes.btn}>
                      Login
                  </Button>
              </div>
          </form>
      </Card>
    );
};

export default Login;
