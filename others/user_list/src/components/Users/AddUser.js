import React, { useState, useRef } from "react";

import Card from "../UI/Card";

import classes from './AddUser.module.css';

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(); // undefined 
   
    const addUserHandler = (event) => {
        event.preventDefault();
        // 단순히 값만 읽을 경우는 ref이 더 간단함
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        } 
        // + 는 숫자로 형변환
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        enteredName.current.value = '';
        enteredAge.current.value = '';
   };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>          
        </div>
    );
};

export default AddUser;