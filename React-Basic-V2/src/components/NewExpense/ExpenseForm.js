import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    // const [enterTitle,setEnterTitle] = useState('')
    // const [enterAmount, setEnterAmount] = useState('')
    // const [enterDate, setEnterDate] = useState('')

    //better oneStae
    //*** example point-1
    const [userInput,setUserInput] = useState({
        enterTitle: '',
        enterAmount: '',
        enterDate: '',
    })

    const titleChangeHandler = (event) =>{
        // setEnterTitle(event.target.value)
        setUserInput((prevState) => {
            return {...prevState, enterTitle: event.target.value}
        })
    }
    const amountChangeHandler = (event)=>{
        // setEnterAmount(event.target.value)
        setUserInput({
            ...userInput,
            enterAmount: event.target.value})
    }

    const dateChangeHandler = (event)=>{
        // setEnterDate(event.target.value)
        setUserInput({
            ...userInput,
            enterDate: event.target.value})
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            title: userInput.enterTitle,
            amount: userInput.enterAmount,
            date: userInput.enterDate
        }
        console.log('ini data dapet dari form');
        console.log(expenseData);
        setUserInput({
            enterTitle: '',
            enterAmount: '',
            enterDate: ''
        })
        props.onSaveExpenseData(expenseData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type="text" value={userInput.enterTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step="0.01"  value={userInput.enterAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type="date" min='2019-01-10' max='2022-12-13' value={userInput.enterDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
