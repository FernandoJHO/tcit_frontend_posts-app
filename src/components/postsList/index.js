import React, { Component } from 'react';
import Page from './page';

class PostsList extends Component {

	constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {

		const {isLoading, filteredPosts, posts, handleDelete} = this.props;

		return (
			<Page isLoading={isLoading} filteredPosts={filteredPosts} posts={posts} handleDelete={handleDelete} />
		);

	}

}

export default PostsList;