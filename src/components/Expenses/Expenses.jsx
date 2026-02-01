import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/card.jsx'
import './expense.css'
import ExpensesFilter from './ExpenseFilter.jsx'
import { useState } from 'react'

function Expenses(props){

    const [filteredYear, setfilteredYear] = useState("2024")

    const changeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeHandler}/>
            {props.dataMain.map((expense) => (
            <ExpenseItem 
                key={expense.id} 
                expenseData={expense} 
            />
            ))}
        </Card>
    )
}

export default Expenses