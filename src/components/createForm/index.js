import React, { Component } from 'react';
import Page from './page';

class CreateForm extends Component {

	constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {

		const {handleSubmit, handleInputChange} = this.props;

		return (
			<Page handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
		);

	}

}

export default CreateForm;