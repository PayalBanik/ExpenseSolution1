import Expenseitems from "./Expenseitems";

export default function Expense() {
    const expenses = [
        {id: 'e1',title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 11)},
        {id: 'e2',title: 'Toilet paper', amount: 4.67, date: new Date(2023, 2, 11)},
        {id: 'e3',title: 'Makeup', amount: 300, date: new Date(2023, 2, 11)},
        {id: 'e4',title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 11)}
      ]
      return (
        <div>
          <h2>Let's get started!</h2>
          <p>This is a paragraph</p>
          <Expenseitems title = {expenses[0].title} amount = {expenses[0].amount} date={expenses[0].date}></Expenseitems>
          <Expenseitems title = {expenses[1].title} amount = {expenses[1].amount} date={expenses[1].date}></Expenseitems>
          <Expenseitems title = {expenses[2].title} amount = {expenses[2].amount} date={expenses[2].date}></Expenseitems>
          <Expenseitems title = {expenses[3].title} amount = {expenses[3].amount} date={expenses[3].date}></Expenseitems>
          
    
        </div>
      );
    }
   
