import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/card.jsx'
import './expense.css'
import ExpensesFilter from './ExpenseFilter.jsx'
import { useState } from 'react'

function Expenses(props){

    let res
    const [filteredYear, setfilteredYear] = useState("2025")

    const changeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }

    if (filteredYear == "all"){
        res = props.dataMain
    }
    else{
        res = props.dataMain.filter((expense) => expense.date.getFullYear() == filteredYear)
    }


    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeHandler}/>
            {res.map((expense) => (
            <ExpenseItem 
                key={expense.id} 
                expenseData={expense} 
            />
            ))}
        </Card>
    )
}

export default Expenses