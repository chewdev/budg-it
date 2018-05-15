import React from 'react';
import { Link } from 'react-router-dom';

const IncomeListItem = ({description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/income/${id}`} >
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default IncomeListItem;