import type { ChangeEvent, FormEvent } from "react"
import type { IData } from "../App"

interface IFormProps {
    data: IData,
    handleFormChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const Form = ({ data, handleFormChange, handleSubmit }: IFormProps) => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleFormChange} value={data.title} type="text" placeholder="Expense title" name="title" />
            <input onChange={handleFormChange} value={data.amount} type="number" placeholder="Amount" name="amount" />
            <select onChange={handleFormChange} value={data.category} name="category">
                <option value="">Select category</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="fun">Fun</option>
            </select>
            <button>Add Expense</button>
        </form>
    )
}