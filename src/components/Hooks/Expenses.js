import React, { useEffect, useState } from 'react';
import withLoader from '../../hocs/withLoader';
import { getExpenses } from './services/expenses';
import ExpensesList from './ExpensesList';


const Expenses = () => {
    const[expenses, setExpenses] = useState([]);
    const fetchExpenses = async () => {
       try{

        const response = await getExpenses();
        setExpenses(response);
       
       }catch(error){
           console.log(error);
       }
       
    }

    useEffect(()=> {
        fetchExpenses();
    },[]);

    if(expenses.length === 0) {
        return(
            <p>Is loading ...</p>
        )
    }

    return(
        <div style={{paddingTop: "40px"}}>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h1 className='h1'>Expenses</h1>
                </div>
              </div>
             <ExpensesList expenses={expenses} />
            </div>
          </div>
    );
}

export default withLoader(Expenses);