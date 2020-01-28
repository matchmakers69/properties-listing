import React, { useState, useReducer } from 'react';
import _groupBy from 'lodash/groupBy';
import _isEmpty from 'lodash/isEmpty';
import styles from './Styles.module.scss';
import cx from 'classnames';
import ExpensesListItem from './ExpensesListItem';

const ExpensesList = ({ expenses }) => {
  const [currentCategory, setCurrentCategory] = useState(-1);

  const groupByBillsCategory = _groupBy(expenses, obj => obj.bills);
  const expensesByCategory = Object.keys(groupByBillsCategory).map((obj, i) => {
    return {
      id: i + 1,
      category: obj,
      expenses: groupByBillsCategory[obj]
    };
  });

  const initialState = {
    searchValue: '',
    expenseContent: ''
  };
  const addSearchReducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [inputValue, setInputValue] = useReducer(
    addSearchReducer,
    initialState
  );
  const handleInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    setInputValue({
      [name]: value
    });
  };

  const handleSelectCategoryClick = categoryIndex => {
    setInputValue({
      searchValue: ''
    });
    const currentExpense =
      categoryIndex === currentCategory ? -1 : categoryIndex;
    setCurrentCategory(currentExpense);
  };

  const renderExpensesByCategory = item => {
    return <ExpensesListItem key={item.id} item={item} />;
  };

  return (
    <div className='row'>
      {expensesByCategory.map((expense, expenseIndex) => {
        const { id, category, expenses } = expense;
        return (
          <div key={id} className='col-xs-12 col-md-4'>
            <h2
              onClick={() => handleSelectCategoryClick(expenseIndex)}
              className={styles.categoryHeader}
            >
              {category}
            </h2>

            <div
              className={cx(
                styles.dropDownWrapper,
                `${
                  expenseIndex === currentCategory ? styles.activeDropDown : ''
                }`
              )}
            >
              <input
                value={inputValue.searchValue}
                name='searchValue'
                placeholder='Quick search expenses'
                type='text'
                onChange={e => handleInputChange(e, id)}
              />
              <ul className={styles.dropDownList}>
                {!_isEmpty(expenses) && expenses.length > 0 ? (
                  expenses
                    .filter(
                      item =>
                        item.name
                          .toLowerCase()
                          .indexOf(inputValue.searchValue) !== -1
                    )
                    .map(renderExpensesByCategory)
                ) : (
                  <p>Nothing to display</p>
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpensesList;
