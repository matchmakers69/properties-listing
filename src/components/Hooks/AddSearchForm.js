import React from "react";
import styles from "./Styles.module.scss";

const AddSearchForm = ({ inputValue,handleInputOnChange }) => {
  const { serchInputValue, searchInputContent } = inputValue;
  return (
    <>
      <form className={styles.formSearch}>
        <div className={styles.inputSeparator}>
          <input
            name="serchInputValue"
            value={serchInputValue}
            placeholder="Search your expense"
            type="text"
            onChange={handleInputOnChange}
          />
        </div>

        <div className={styles.inputSeparator}>
          <input
            value={searchInputContent}
            name="searchInputContent"
            placeholder="Add expense"
            type="text"
            onChange={handleInputOnChange}
          />
        </div>
        <div className={styles.inputSeparator}>
          <button type="submit">Add expense</button>
        </div>
      </form>
    </>
  );
};

export default AddSearchForm;
