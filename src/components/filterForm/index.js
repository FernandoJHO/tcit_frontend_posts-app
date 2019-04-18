import React, { Component } from 'react';
import Page from './page';
import { connect } from 'react-redux';
import loadFilteredPosts from '../../redux/actions/loadFilteredPosts';
import loadPosts from '../../redux/actions/loadPosts';

class FilterForm extends Component {

	constructor(props){
		super(props);
		this.state = {

		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({[name]: value});
	}

	handleFilter(event){	
		event.preventDefault();
		const filterContent = this.state.filterContent;

		const { posts } = this.props;

		let filteredPosts;

		if(filterContent){
			filteredPosts = posts.filter(post => post.name.toLowerCase().includes(filterContent.toLowerCase()));
		} else{
			filteredPosts = [];
		}

		this.props.loadFilteredPosts(filteredPosts);
	}

	render() {

		return (
			<Page handleInputChange={this.handleInputChange} handleFilter={this.handleFilter} />
		);

	}

}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		loadFilteredPosts: filteredPosts => dispatch(loadFilteredPosts(filteredPosts)),
	};

}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);