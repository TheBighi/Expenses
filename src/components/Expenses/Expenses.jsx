import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/card.jsx'
import './expense.css'

function Expenses(props){
    return (
        <Card className='expenses'>
            {props.dataMain.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
            ))}
        </Card>
    )
}

export default Expenses