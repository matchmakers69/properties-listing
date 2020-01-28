export const getNestedExpensesByName = (expensesByCategory, inputValue, id) => {
  let nestedFilteredExpenses = expensesByCategory;
  const { searchValue } = inputValue;

  const foundNestedExpense = expensesByCategory.find(x => x.id === id);
  const nestedExpensesArray = foundNestedExpense.expenses;

  nestedFilteredExpenses = nestedExpensesArray.filter(expense => {
    return expense.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });
  return nestedFilteredExpenses;
};
