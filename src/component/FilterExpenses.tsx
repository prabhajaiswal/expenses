import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterExpenses } from '../Redux/action'; // Import your action creator

const FilterExpenses: React.FC = () => {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');

  const handleFilterExpenses = () => {
    // Dispatch the filterExpenses action with the filter text
    dispatch(filterExpenses(filterText));
  };

  return (
    <div>
      <h2>Filter Expenses</h2>
      <input
        type="text"
        placeholder="Enter text to filter expenses"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button onClick={handleFilterExpenses}>Filter</button>
    </div>
  );
};

export default FilterExpenses;
