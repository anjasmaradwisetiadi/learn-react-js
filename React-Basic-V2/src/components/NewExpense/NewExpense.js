import React from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const saveExpenseDaaHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        console.log('ini data dari child root');
        console.log(expenseData);
        props.expenseDataRoot(expenseData)
    }
    return(
        <div className="new-expense" >
            <ExpenseForm onSaveExpenseData={saveExpenseDaaHandler}/>
        </div>
    )
}

export default NewExpense;
