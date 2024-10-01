import React from 'react';
import { ExpenseItem } from './ExpenseItem';

export const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Expense List</h1>
      <ul className="ml-8">
        {expenses.map((expense, index) => (
          <li key={index} className="mb-4">
            <ExpenseItem 
              expense_date={expense.expense_date} 
              description={expense.description} 
              total={expense.total} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};