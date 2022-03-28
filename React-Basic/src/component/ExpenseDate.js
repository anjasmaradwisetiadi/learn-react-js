import './ExpenseDateStyle.css'

function ExpenseDate(props) {
    const getDate = props.date
    const getDay = getDate.toLocaleString('en-US',{day:'2-digit'})
    const getMonth = getDate.toLocaleString('en-US',{month:'long'})
    const getYear = getDate.getFullYear()
    return(
        <div className='expense-date'>
            <div className='expense-date__day'>{getDay}</div>
            <div className='expense-date__month'>{getMonth}</div>
            <div className='expense-date__year'>{getYear}</div>
        </div>
    )
}
export default ExpenseDate
