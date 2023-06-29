import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExepense = (props) => {

    // communicating up
    // props로 Handler의 pointer만 전달
    // 실행은 자식 컴포넌트에서 실행
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExepense;