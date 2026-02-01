import Card from '../UI/card.jsx'
import './expense.css'
import ExpensesFilter from './ExpenseFilter.jsx'
import ExpenseList from './ExpensesList.jsx'
import { useState } from 'react'

function Expenses(props){

    let res
    let expenseContent = <p style={{color: 'white'}}>No expenses found</p>
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
            <ExpenseList expenses={res}/>
        </Card>
    )
}

export default Expenses