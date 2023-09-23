
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    expenses: [],
    filterText: '',
};
const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return Object.assign(Object.assign({}, state), { expenses: [...state.expenses, action.payload] });
        case 'DELETE_EXPENSE':
            return Object.assign(Object.assign({}, state), { expenses: state.expenses.filter((expense) => expense !== action.payload) });
        case 'FILTER_EXPENSES':
            return Object.assign(Object.assign({}, state), { filterText: action.payload });
        default:
            return state;
    }
};
exports default  expensesReducer;
