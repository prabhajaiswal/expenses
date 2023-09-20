import { ExpenseType } from "./store";
export const addExpense = (expense: ExpenseType) => ({
    type: 'ADD_EXPENSE',
    payload: expense,
  });
  
  export const deleteExpense = (id:string) => ({
    type: 'DELETE_EXPENSE',
    payload: id,
  });
  
  export const filterExpenses = (text:string) => ({
    type: 'FILTER_EXPENSES',
    payload: text,
  });
  