import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ location }) => (
	<div>
	  <h3>
		<p>404: No match for <code>{location.pathname}</code></p>
		<Link to="/">Go Home</Link>
	  </h3>
	</div>
);

export default NotFoundPage;