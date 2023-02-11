import './Expenseitems.css'
import './Expensedate'
import Expensedate from './Expensedate';
function Expenseitems(props) {
  
    return (
    <div className='expense-item'><Expensedate date={props.date}/>
    <div className='expense-item__description'><h2>{props.title}</h2></div>
    <div className='expense-item__price'>{props.amount}</div></div>)
    
}
export default Expenseitems;