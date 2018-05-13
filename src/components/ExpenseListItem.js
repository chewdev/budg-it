import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {dispatch(removeExpense({ id }))}}>Remove</button>
        <Link to={'/edit/'+ id} >Edit</Link>
    </div>
);

export default connect()(ExpenseListItem);