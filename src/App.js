import React, { useState } from "react";

import NewExepense from "./components/NewExpense/NewExpense" ;
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // 이전 state를 최신 state로 업데이트하는 안전한 방법
    // 이렇게 사용하지 않도록 한다.
    // setExpenses([expense, ...expenses]); 
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExepense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
