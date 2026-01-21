
import type { IExpense } from "../App"

interface IExpenseCardProps extends IExpense {
    necessary?: boolean
    handleDelete: (id: number) => void
}



export const ExpenseCard = ({id, title, category, amount, necessary, handleDelete}: IExpenseCardProps) => {


    return (
        <div onClick={() => handleDelete(id)} className={`expense${necessary ? " expense--necessary" : ""}`}>
            <div>
                {title}
                <div className="category">{category}</div>
            </div>
            <div className="amount">{amount}</div>
        </div>
    )
}
