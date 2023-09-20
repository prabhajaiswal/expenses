
import expensesReducer from '../Redux/reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    expenses: expensesReducer, // Use the expensesReducer for the 'expenses' slice of the state.
  },
});
// In your Redux store configuration or types file
// In a separate TypeScript file, e.g., types.ts
export interface ExpenseType {
  id: string;
  description: string;
  amount: number;
  date: Date;
  // You can add other properties specific to your expenses here
}

export type RootStateType = {
  expenses: ExpenseType[]; // Define the shape of your state
  filterText: string;
  // ...other properties
};

export default store;

