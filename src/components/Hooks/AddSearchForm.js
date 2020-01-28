import React, { useState, useReducer } from 'react';
import styles from './Styles.module.scss';

const AddSearchForm = () => {
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
  return (
    <>
      <form className={styles.formSearch}>
        <div className={styles.inputSeparator}>
          <input
            value={inputValue.searchValue}
            name='searchValue'
            placeholder='Search your expense'
            type='text'
            onChange={handleInputChange}
          />
        </div>

        {/* <div className={styles.inputSeparator}>
          <input value='' name='' placeholder='Add expense' type='text' />
        </div> */}
        <div className={styles.inputSeparator}>
          <button type='submit'>Add expense</button>
        </div>
      </form>
    </>
  );
};

export default AddSearchForm;
