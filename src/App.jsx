import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from "./components/NewExpense/NewExpense.jsx"

function App() {
  const expenses = 
  [
    {
      date : new Date(2026, 0, 10),
      title : 'New Book So Cool To Read',
      price : 25.99
    },
    {
      date : new Date(2026, 0, 5),
      title : 'Fortnite V-Bucks',
      price : 99.99
    }
  ]
  const addExpenseHanlder = (expense) => {
    console.log('app.jsx data')
    console.log(expense)
  }

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHanlder}/>
      <Expenses dataMain={expenses}/>
    </div>
  )
}

export default App
