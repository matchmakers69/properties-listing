import React, { useState, useReducer } from "react";
import _groupBy from "lodash/groupBy";
import styles from "./Styles.module.scss";
import cx from "classnames";
import AddSearchForm from "./AddSearchForm";

const ExpensesList = ({ expenses }) => {
  const [currentCategory, setCurrentCategory] = useState(-1);
  const initialState = {
    serchInputValue: "",
    searchInputContent: ""
  };
  const searchReducer = (state, newState) => {
      return {...state, ...newState}
  }
  const [inputValue, setInputValue] = useReducer(searchReducer,initialState);

  const handleInputOnChange = e => {
    const target = e.target;
    const { name, value } = target;
    setInputValue({
      [name]: value
    });
  };
  const groupByBillsCategory = _groupBy(expenses, obj => obj.bills);
  const expensesByCategory = Object.keys(groupByBillsCategory).map((obj, i) => {
    return {
      id: i + 1,
      category: obj,
      expenses: groupByBillsCategory[obj]
    };
  });

  const handleSelectCategoryClick = categoryIndex => {
    const currentExpense =
      categoryIndex === currentCategory ? -1 : categoryIndex;
    setCurrentCategory(currentExpense);
  };

  return (
    <div className="row">
      {expensesByCategory.map((expense, expenseIndex) => {
        const { id, category, expenses } = expense;
        return (
          <div key={id} className="col-xs-12 col-md-4">
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
                  expenseIndex === currentCategory ? styles.activeDropDown : ""
                }`
              )}
            >
              <AddSearchForm
                inputValue={inputValue}
                handleInputOnChange={handleInputOnChange}
              />
              <ul className={styles.dropDownList}>
                {expenses.map(item => {
                  return (
                    <li key={item.id}>
                      <h4>{item.name}</h4>
                      <span>{item.price}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpensesList;
