import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import axios from 'axios';
import Page from './page';
import loadPosts from '../../redux/actions/loadPosts';
import loadFilteredPosts from '../../redux/actions/loadFilteredPosts';
import setMessage from '../../redux/actions/setMessage';

function getPosts(){
  return axios.get('/posts');
}

function deletePost(id){
  const url = '/posts/' + id;
  return axios.delete(url);
}

class PostsList extends Component {

	constructor(props){
		super(props);
		this.state = {
			postsList: [],
			deletedPost: {id: null, name: null, description: null},
			isLoading: false
		};

		this.handleDelete = this.handleDelete.bind(this);
	}

	async componentDidMount() {
		this.setState({isLoading: true});

		/* await getPosts().then(res => {this.props.loadPosts(res.data);
			this.setState({isLoading: false});
		}); */
		await getPosts().then(res => {this.setState({postsList: res.data, isLoading: false});});
		const { postsList } = this.state;
		this.props.loadPosts(postsList);
	}

	async handleDelete(id){
		await deletePost(id).then(res => {
			this.setState({deletedPost: {id: res.data.id, name: res.data.name, description: res.data.description}});
			this.props.setMessage("Se ha eliminado el post: " + res.data.name);
		});

		let { postsList, deletedPost } = this.state;
		let { filteredPosts } = this.props;

		let index = postsList.findIndex(post => post.id === deletedPost.id);
		postsList.splice(index,1);
		let indexFiltered = filteredPosts.findIndex(post => post.id === deletedPost.id);

		if(indexFiltered !== -1){
			filteredPosts.splice(indexFiltered, 1);
		}

		this.setState({postsList: postsList});
		this.props.loadPosts(postsList);
		this.props.loadFilteredPosts(filteredPosts); 
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
	};

}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);