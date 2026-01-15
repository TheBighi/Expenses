import ExpenseItem from './ExpenseItem.jsx'
import './expense.css'

function Expenses(props){
    return (
        <div className='expenses'>
            {props.dataMain.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
            ))}
        </div>
    )
}

export default Expenses