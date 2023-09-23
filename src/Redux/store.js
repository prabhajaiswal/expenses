
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = __importDefault(require("../Redux/reducer"));
const toolkit_1 = require("@reduxjs/toolkit");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        expenses: reducer_1.default, // Use the expensesReducer for the 'expenses' slice of the state.
    },
});
exports default store;
