import React, { useEffect, useState } from 'react';
import { getExpenses } from './services/expenses';
import ExpensesList from './ExpensesList';
import Preloader from '../../components/Preloader/PageLoader';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();
      setExpenses(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <Preloader data-test='pageLoader' isLoading={isLoading}>
      <div data-test='expenses-section' style={{ paddingTop: '40px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <h1 className='h1'>Expenses</h1>
            </div>
          </div>
          <ExpensesList expenses={expenses} />
        </div>
      </div>
    </Preloader>
  );
};

export default Expenses;
