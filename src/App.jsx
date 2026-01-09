import './App.css'
import ExpenseItem from './components/ExpenseItem.jsx'

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
    },
    {
      date : new Date(2026, 0, 6),
      title : 'Meal',
      price : 12.59
    },

  ]

  return (
    <>
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
      <ExpenseItem data={expenses[2]}/>
    </>
  )
}

export default App
