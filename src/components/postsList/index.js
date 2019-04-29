import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import ApiClient from '../../utils/ApiClient';
import Page from './page';
import loadPosts from '../../redux/actions/loadPosts';
import loadFilteredPosts from '../../redux/actions/loadFilteredPosts';
import setMessage from '../../redux/actions/setMessage';
import removePost from '../../redux/actions/removePost';
import removeFilteredPost from '../../redux/actions/removeFilteredPost';

const apiUrl = '/posts/';

class PostsList extends Component {

	constructor(props){
		super(props);
		this.state = {
			deletedPost: {id: null, name: null, description: null},
			isLoading: false
		};

		this.handleDelete = this.handleDelete.bind(this);
	}

	async componentDidMount() {
		this.setState({isLoading: true});

		await ApiClient.get(apiUrl).then(res => {this.props.loadPosts(res.data);
			this.setState({isLoading: false});
		}); 

	}

	async handleDelete(event){
		let id = event.target.dataset.id;
		await ApiClient.delete(apiUrl+id).then(res => {
			this.setState({deletedPost: {id: res.data.id, name: res.data.name, description: res.data.description}});
			this.props.setMessage("Se ha eliminado el post: " + res.data.name);
		});
		
		let { deletedPost } = this.state;
		
		this.props.removePost(deletedPost);
		this.props.removeFilteredPost(deletedPost);	
	}

	render() {

		const {filteredPosts, posts} = this.props;
		const { isLoading } = this.state;

		return (
			<Page isLoading={isLoading} filteredPosts={filteredPosts} posts={posts} handleDelete={this.handleDelete} />
		);

	}

}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		filteredPosts: state.filteredPosts,
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		loadPosts: postsList => dispatch(loadPosts(postsList)),
		loadFilteredPosts: filteredPosts => dispatch(loadFilteredPosts(filteredPosts)),
		setMessage: message => dispatch(setMessage(message)),
		removePost: post => dispatch(removePost(post)),
		removeFilteredPost: filteredPost => dispatch(removeFilteredPost(filteredPost)),
	};

}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);