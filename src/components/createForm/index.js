import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiClient from '../../utils/apiClient'
import Page from './page';
import addPost from '../../redux/actions/addPost';
import setMessage from '../../redux/actions/setMessage';

const apiUrl = '/posts/';

class CreateForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			createdPost: {id: null, name: null, description: null}
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({[name]: value});
	}

	async handleSubmit(event){
		event.preventDefault();

		const postName = this.state.postName;
		const postDescription = this.state.postDescription;

		if(postName && postDescription){
			let data = new FormData();
			data.append('name', postName);
			data.append('description', postDescription);
			await ApiClient.post(apiUrl, data).then(res => {
				this.setState({createdPost: {id: res.data.id, name: res.data.name, description: res.data.description}});
				this.props.setMessage("Se ha creado el post: " + res.data.name);
			});
		}

		let { createdPost } = this.state;

		this.props.addPost(createdPost);
	}

	render() {

		return (
			<Page handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
		);

	}

}

const mapDispatchToProps = (dispatch) => {

	return {
		addPost: post => dispatch(addPost(post)),
		setMessage: message => dispatch(setMessage(message)),
	};

}

export default connect(null, mapDispatchToProps)(CreateForm);