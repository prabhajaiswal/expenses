
import './App.css';
import ExpenseList  from './component/ExpenseList';
import AddExpense from './component/AddExpense';
import FilterExpenses from './component/FilterExpenses';
import { useState,useEffect } from 'react';
function App() {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
      let exp = 0;
      let inc = 0;
      transactions.map((payload) =>
          payload.type === "EXPENSE"
              ? (exp = exp + payload.amount)
              : (inc = inc + payload.amount),
      );
      updateExpense(exp);
      updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [transactions]);

  const addTransaction = (payload) => {
      const transactionArray = [...transactions];
      transactionArray.push(payload);
      updateTransaction(transactionArray);
  };
  return (
    <div className="App">
    
    <ExpenseList expense={expense}
                income={income}
                addTransaction={addTransaction}/>
                  {transactions?.length ? (
                <AddExpense transactions={transactions} />
            ) : (
                ""
            )}
   
    
    </div>
  );
}

export default App;
