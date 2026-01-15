import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.jsx'
import Card from '../UI/card.jsx'

function ExpenseItem(props){
    console.log(props)
    return (
        <Card className='expense-item'>
            <ExpenseDate data={props.data.date}/>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}€</div>
            </div>
        </Card>
    )
}

export default ExpenseItem