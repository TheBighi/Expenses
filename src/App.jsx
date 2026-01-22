import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'

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

  return (
    <div className='app'>
      <Expenses dataMain={expenses}/>
    </div>
  )
}

export default App
