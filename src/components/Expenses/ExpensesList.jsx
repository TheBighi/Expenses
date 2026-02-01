import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"

const ExpenseList = (props) => {

    let expenseContent = <p className="expenses-list__fallback">No expenses found</p>

    if(props.expenses.length > 0){
        expenseContent = props.expenses.map((expense) => (
            <ExpenseItem 
                key={expense.id} 
                expenseData={expense} 
            />
            ))
    }

    return (
        <>
        <ul className="expenses-list">
            {expenseContent}
        </ul>
        </>
    )
}

export default ExpenseList