import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from "./components/NewExpense/NewExpense.jsx"
import { useEffect, useState } from 'react'

function App() {
  const DUMMY_EXPENSES = 
  [
    {
      id : 'id1',
      date : new Date(2026, 0, 10),
      title : 'New Book So Cool To Read',
      price : 25.99
    },
    {
      id : 'id2',
      date : new Date(2026, 0, 2),
      title : 'Fortnite V-Bucks',
      price : 99.99
    },
    {
      id : 'id3',
      date : new Date(2025, 6, 22),
      title : 'ChatGPT++',
      price : 99.99
    },
    {
      id : 'id4',
      date : new Date(2025, 1, 2),
      title : 'Phone',
      price : 999.99
    }
  ]
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expesnes'))
    return expensesFromLS || []
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  const addExpenseHanlder = (expense) => {
    console.log('app.jsx data')
    console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHanlder}/>
      <Expenses dataMain={expenses}/>
    </div>
  )
}

export default App
