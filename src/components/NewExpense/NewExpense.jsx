import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.jsx"
import { useState } from "react"

const NewExpense = (props) => {

    const [editForm, setEditForm] = useState(false)

    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        }
        console.log(props)
        props.onAddExpense(expenseData)
    }

    const openEditForm = () => {
        setEditForm(true)
        console.log("Edit form opened")
    }

    const closeEditForm = () => {
        setEditForm(false)
        console.log("Edit form closed")
    }

    return(
        <div className="new-expense">
            {!editForm && <button onClick={openEditForm}>Add new expense</button>}
            {editForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} onCancel={closeEditForm}/>}
        </div>
    )
}

export default NewExpense

//<ExpenseForm onSaveExpenseData={saveExpenseDataHanlder}/>