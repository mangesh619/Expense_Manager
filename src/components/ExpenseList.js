import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) =>(
    <div>
       {
           props.expenses.length === 0 ? (
               <p>No Expenses</p>
           ):(
            props.expenses.map((item)=>(
                <ExpenseListItem key={item.id} {...item} />
            ))
           )
       }
    </div>
);

// This function runs every time state changes
const mapStateToprops = (state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }
};

export default connect(mapStateToprops)(ExpenseList);

