

interface ExpensesState {
  expenses: any[]; // Adjust 'any' to match your actual expense item type
  filterText: string;
}

const initialState: ExpensesState = {
  expenses: [],
  filterText: '',
};

  
  const expensesReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter((expense) => expense!== action.payload),
        };
      case 'FILTER_EXPENSES':
        return {
          ...state,
          filterText: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default expensesReducer;

  