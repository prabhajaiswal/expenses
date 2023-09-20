
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterExpenses = exports.deleteExpense = exports.addExpense = void 0;
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    payload: expense,
});
exports.addExpense = addExpense;
const deleteExpense = (id) => ({
    type: 'DELETE_EXPENSE',
    payload: id,
});
exports.deleteExpense = deleteExpense;
const filterExpenses = (text) => ({
    type: 'FILTER_EXPENSES',
    payload: text,
});
exports.filterExpenses = filterExpenses;
