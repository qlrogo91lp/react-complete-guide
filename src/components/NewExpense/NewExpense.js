import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExepense = (props) => {
    const [isEditing, setIsEdting] = useState(false);
    
    // communicating up
    // props로 Handler의 pointer만 전달
    // 실행은 자식 컴포넌트에서 실행
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEdting(false);
    };

    const startEditingHandler = () => {
        setIsEdting(true);
    };

    const stopEditingHandler = () => {
        setIsEdting(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler} >Add New Button</button>
            )}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExepense;