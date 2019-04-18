import React, { Component } from 'react';
import Page from './page';

class FilterForm extends Component {

	constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {

		const {handleFilter, handleInputChange} = this.props;

		return (
			<Page handleInputChange={handleInputChange} handleFilter={handleFilter} />
		);

	}

}

export default FilterForm;