import "./ExpenseDate.css"

function ExpenseDate (props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
    <div className="expense-time">
        <div className="divs1">{month}</div>
        <div className="divs2">{year}</div>
        <div className="divs3">{day}</div>
    </div>
    )
}

export default ExpenseDate;