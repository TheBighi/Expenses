import './ExpenseForm.css'
import { useState, useRef, Fragment } from 'react'
import Error from '../UI/error.jsx'

const ExpenseForm = (props) => {
    const [error, setError] = useState(null)
    console.log(error)

    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()


    const titleChangeHandler = (event) => {
        setuserInput({...userInput, enteredTitle:event.target.value})
    }
    const priceChangeHandler = (event) => {
        setuserInput({...userInput, enteredPrice:event.target.value})
    }
    const dateChangeHandler = (event) => {
        setuserInput({...userInput, enteredDate:event.target.value})
    }


    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        props.onCancel()
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} ref={titleInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min="0.01" step="0.01" onChange={priceChangeHandler} ref={amountInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2024-11-12" max="2028-01-31" onChange={dateChangeHandler} ref={dateInputRef}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm