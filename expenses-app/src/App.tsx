import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import './App.css'
import { ExpenseCard } from './components/ExpenseCard'
import { Form } from './components/Form'

// I для интерфейсов, T для типов
type TExpenseType = "food" | "transport" | "fun" | ""

export interface IExpense {
  id: number,
  title: string,
  amount: number,
  category: TExpenseType
}

export interface IData {
  title: string,
  amount: string,
  category: TExpenseType
}

export const App = () => {

  const [data, setData] = useState<IData>({
    title: "",
    amount: "",
    category: ""
  })

  const [expenses, setExpenses] = useState<IExpense[]>([])
  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const expense: IExpense = {
      id: Date.now(),
      title: data.title,
      amount: +data.amount,
      category: data.category
    }
    setExpenses(prev => [...prev, expense])
  }

  const handleDelete = (id: number) => {
    setExpenses(prev => prev.filter(el => el.id !== id))
  }

  return (
    <>
      <div className="app">
        <h1>Expense Tracker</h1>
        {/* Input Form */}
        <Form handleSubmit={handleSubmit} handleFormChange={handleFormChange} data={data} />
        <div className='total'>Total: ${expenses.reduce((acc, el) => acc + el.amount, 0)}</div>
        {expenses.map((el) => 
        <ExpenseCard handleDelete={handleDelete} key={el.id} necessary={el.category === "food"} {...el} />)}

      </div>

    </>
  )
}