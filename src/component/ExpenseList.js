"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n"])));
var ExpenseContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  margin: 20px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  margin: 20px;\n"])));
var ExpenseBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 4px;\n  border: 1px solid #e6e8e9;\n  padding: 15px 20px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 135px;\n  & span {\n    color: ", ";\n    font-weight: bold;\n    font-size: 20px;\n  }\n"], ["\n  border-radius: 4px;\n  border: 1px solid #e6e8e9;\n  padding: 15px 20px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 135px;\n  & span {\n    color: ", ";\n    font-weight: bold;\n    font-size: 20px;\n  }\n"])), function (props) { return (props.isIncome ? "green" : "red"); });
var BalanceBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 18px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  font-weight: bold;\n  & span {\n    color: #0d1d2c;\n    opacity: 80%;\n    font-weight: bold;\n    font-size: 20px;\n  }\n"], ["\n  font-size: 18px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  font-weight: bold;\n  & span {\n    color: #0d1d2c;\n    opacity: 80%;\n    font-weight: bold;\n    font-size: 20px;\n  }\n"])));
var AddTransaction = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 15px;\n  background: #0d1d2c;\n  display: flex;\n  color: white;\n  padding: 5px 10px;\n  cursor: pointer;\n  flex-direction: row;\n  border-radius: 4px;\n  font-weight: bold;\n"], ["\n  font-size: 15px;\n  background: #0d1d2c;\n  display: flex;\n  color: white;\n  padding: 5px 10px;\n  cursor: pointer;\n  flex-direction: row;\n  border-radius: 4px;\n  font-weight: bold;\n"])));
var AddTransactionContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 15px;\n  display: ", ";\n  color: #0d1d2c;\n  flex-direction: column;\n  border-radius: 4px;\n  border: 1px solid #e6e8e9;\n  width: 100%;\n  align-items: center;\n  padding: 15px 20px;\n  margin: 10px 20px;\n  gap: 10px;\n  & input {\n    width: 90%;\n    outline: none;\n    padding: 10px 12px;\n    border-radius: 4px;\n    border: 1px solid #e6e8e9;\n  }\n"], ["\n  font-size: 15px;\n  display: ", ";\n  color: #0d1d2c;\n  flex-direction: column;\n  border-radius: 4px;\n  border: 1px solid #e6e8e9;\n  width: 100%;\n  align-items: center;\n  padding: 15px 20px;\n  margin: 10px 20px;\n  gap: 10px;\n  & input {\n    width: 90%;\n    outline: none;\n    padding: 10px 12px;\n    border-radius: 4px;\n    border: 1px solid #e6e8e9;\n  }\n"])), function (props) { return (props.isAddTxnVisible ? "flex" : "none"); });
var RadioBox = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  margin: 10px 0;\n  & input {\n    width: unset;\n    margin: 0 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  margin: 10px 0;\n  & input {\n    width: unset;\n    margin: 0 10px;\n  }\n"])));
var AddTransactionView = function (props) {
    var _a = (0, react_1.useState)(), amount = _a[0], setAmount = _a[1];
    var _b = (0, react_1.useState)(), desc = _b[0], setDesc = _b[1];
    var _c = (0, react_1.useState)("EXPENSE"), type = _c[0], setType = _c[1];
    return (<AddTransactionContainer isAddTxnVisible={props.isAddTxnVisible}>
      <input placeholder="Amount" type="number" value={amount} onChange={function (e) { return setAmount(e.target.value); }}/>
      <input placeholder="Description" value={desc} onChange={function (e) { return setDesc(e.target.value); }}/>
      <RadioBox>
        <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"} onChange={function (e) { return setType(e.target.value); }}/>
        <label htmlFor="expense">Expense</label>
        <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"} onChange={function (e) { return setType(e.target.value); }}/>
        <label htmlFor="Income">Income</label>
      </RadioBox>

      <AddTransaction onClick={function () {
            return props.addTransaction({
                id: Date.now(),
                amount: Number(amount),
                desc: desc || "",
                type: type
            });
        }}>
        Add Transaction
      </AddTransaction>
    </AddTransactionContainer>);
};
var OverViewComponent = function (props) {
    var _a = (0, react_1.useState)(false), isAddTxnVisible = _a[0], toggleAddTXn = _a[1];
    return (<Container>
      <BalanceBox>
        Balance: ${props.income - props.expense}
        <AddTransaction onClick={function () { return toggleAddTXn(function (isVisible) { return !isVisible; }); }}>
          {isAddTxnVisible ? "CANCEL" : "ADD"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (<AddTransactionView isAddTxnVisible={isAddTxnVisible} addTransaction={function (payload) {
                props.addTransaction(payload);
                toggleAddTXn(function (isVisible) { return !isVisible; });
            }}/>)}
      <ExpenseContainer>
        <ExpenseBox>
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>);
};
export default OverViewComponent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
