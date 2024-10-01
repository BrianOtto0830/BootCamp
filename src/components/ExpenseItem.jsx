import React from 'react'

export const ExpenseItem = () => {
  const expense_date = '28 Maret 2022';
  const description = 'Listrik';
  const total = 'RP. 500.000';

  return (
    <div className="p-4 mb-4">
        <h1 className='text-2xl font-bold'>My Expenses</h1>
        <p className="text-lg font-semibold">Expense Date : {expense_date}</p>
        <h2 className="text-lg font-semibold">Description : {description}</h2>
        <p className="text-lg font-semibold">Total : {total}</p>
    </div>
  )
}
