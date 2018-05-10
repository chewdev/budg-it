import React from 'react';

const EditBudgPage = (props) => {
	console.log(props);
	let id = props.match.params.id;
	return (
	<div>
		Editing the Budg with id of {id}
	</div>
	);
};

export default EditBudgPage;