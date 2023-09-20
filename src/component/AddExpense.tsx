import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Transaction {
  type: string;
  desc: string;
  amount: number;
}

interface TransactionsComponentProps {
  transactions: Transaction[];
}

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  overflow-y: auto !important;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`;

interface CellProps {
  isExpense: boolean;
}

const Cell = styled.div<CellProps>`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #e6e8e9;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;

const TransactionCell: React.FC<{ payload: Transaction }> = (props) => {
  return (
    <Cell isExpense={props.payload.type === "EXPENSE"}>
      <span>{props.payload.desc}</span>
      <span>${props.payload.amount}</span>
    </Cell>
  );
};

const TransactionsComponent: React.FC<TransactionsComponentProps> = (props) => {
  const [searchText, updateSearchText] = useState<string>("");
  const [filteredTransaction, updateTxn] = useState<Transaction[]>(
    props.transactions
  );

  const filterData = (searchText: string) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.map((payload, index) => (
        <TransactionCell key={index} payload={payload} />
      ))}
    </Container>
  );
};

export default TransactionsComponent;
