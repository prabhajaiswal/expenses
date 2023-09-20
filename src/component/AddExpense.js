"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: white;\n  color: #0d1d2c;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 22px;\n  font-size: 18px;\n  width: 100%;\n  gap: 10px;\n  font-weight: bold;\n  overflow-y: auto !important;\n  & input {\n    padding: 10px 12px;\n    border-radius: 12px;\n    background: #e6e8e9;\n    border: 1px solid #e6e8e9;\n    outline: none;\n  }\n"], ["\n  background-color: white;\n  color: #0d1d2c;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 22px;\n  font-size: 18px;\n  width: 100%;\n  gap: 10px;\n  font-weight: bold;\n  overflow-y: auto !important;\n  & input {\n    padding: 10px 12px;\n    border-radius: 12px;\n    background: #e6e8e9;\n    border: 1px solid #e6e8e9;\n    outline: none;\n  }\n"])));
var Cell = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: white;\n  color: #0d1d2c;\n  display: flex;\n  flex-direction: row;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid #e6e8e9;\n  align-items: center;\n  font-weight: normal;\n  justify-content: space-between;\n  border-right: 4px solid ", ";\n"], ["\n  background-color: white;\n  color: #0d1d2c;\n  display: flex;\n  flex-direction: row;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid #e6e8e9;\n  align-items: center;\n  font-weight: normal;\n  justify-content: space-between;\n  border-right: 4px solid ", ";\n"])), function (props) { return (props.isExpense ? "red" : "green"); });
var TransactionCell = function (props) {
    return (<Cell isExpense={props.payload.type === "EXPENSE"}>
      <span>{props.payload.desc}</span>
      <span>${props.payload.amount}</span>
    </Cell>);
};
var TransactionsComponent = function (props) {
    var _a = (0, react_1.useState)(""), searchText = _a[0], updateSearchText = _a[1];
    var _b = (0, react_1.useState)(props.transactions), filteredTransaction = _b[0], updateTxn = _b[1];
    var filterData = function (searchText) {
        if (!searchText || !searchText.trim().length) {
            updateTxn(props.transactions);
            return;
        }
        var txn = __spreadArray([], props.transactions, true);
        txn = txn.filter(function (payload) {
            return payload.desc.toLowerCase().includes(searchText.toLowerCase().trim());
        });
        updateTxn(txn);
    };
    (0, react_1.useEffect)(function () {
        filterData(searchText);
    }, [props.transactions]);
    return (<Container>
      Transactions
      <input placeholder="Search" onChange={function (e) {
            updateSearchText(e.target.value);
            filterData(e.target.value);
        }}/>
      {filteredTransaction === null || filteredTransaction === void 0 ? void 0 : filteredTransaction.map(function (payload, index) { return (<TransactionCell key={index} payload={payload}/>); })}
    </Container>);
};
export default TransactionsComponent;
var templateObject_1, templateObject_2;
