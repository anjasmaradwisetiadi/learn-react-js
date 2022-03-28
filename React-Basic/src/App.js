import logo from './logo.svg';
import ExpenseItem from "./component/ExpenseItem";
import './App.css';

function App() {
  const expense = [
      {
          id:'f1',
          title: 'Toilet Paper',
          amount: 23,
          date: new Date(2021,5,13)
      },
      {
          id:'f2',
          title: 'Gasoline',
          amount: 5,
          date: new Date(2021,5,13)
      },
      {
          id:'f3',
          title: 'Paper',
          amount: 2,
          date: new Date(2021,5,14)
      },
      {
          id:'f4',
          title: 'Bolpoint',
          amount: 1,
          date: new Date(2021,5,14)
      }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExpenseItem
            title={expense[0].title}
            amount={expense[0].amount}
            date={expense[0].date}
        />
        <ExpenseItem
            title={expense[1].title}
            amount={expense[1].amount}
            date={expense[1].date}
        />
        <ExpenseItem
            title={expense[2].title}
            amount={expense[2].amount}
            date={expense[2].date}
        />
        <ExpenseItem
            title={expense[3].title}
            amount={expense[3].amount}
            date={expense[3].date}
        />
      </header>
      <div className="body" >
      </div>
    </div>
  );
}

export default App;
