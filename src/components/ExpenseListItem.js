import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({description, amount, createdAt, id}) => (
        <Link className="list-item" to={`/edit/expense/${id}`} >
                <div>
                    <h3 className="list-item__description">{description}</h3>
                    <span className="list-item__date">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                </div>
                <h3 className="list-item__amount">
                    {numeral(amount / 100).format('$0,0.00')}
                </h3>
        </Link>
);

export default ExpenseListItem;