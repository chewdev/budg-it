import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Budg-It</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to='/create/expense' activeClassName="is-active">Create Expense</NavLink>
        <NavLink to='/create/income' activeClassName="is-active">Create Income</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;