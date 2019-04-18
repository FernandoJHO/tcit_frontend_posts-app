import React, { Component } from 'react';
import axios from 'axios';
import Page from './page';

function getPosts(){
  return axios.get('/posts');
}

function deletePost(id){
  const url = '/posts/' + id;
  return axios.delete(url);
}

function createPost(name, description){
  var data = new FormData();
  data.append('name', name);
  data.append('description', description);

  return axios.post('/posts', data);
}

class MainView extends Component {

  constructor(props){
    super(props);
    this.state = {posts: [], 
      filteredPosts: [], 
      isLoading: false, 
      deletedPost: {id: null, name: null, description: null}, 
      createdPost: {id: null, name: null, description: null}, 
      message: null
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleCloseMsg = this.handleCloseMsg.bind(this);
  }

  componentDidMount() {

    document.title = "Posts App"
    this.setState({isLoading: true});

    getPosts().then(res => {this.setState({posts: res.data, isLoading: false});});
    
  } 

  async handleDelete(id){
    await deletePost(id).then(res => {
      this.setState({deletedPost: {id: res.data.id, name: res.data.name, description: res.data.description}, 
        message: "Se ha eliminado el post: " + res.data.name})
    });

    let posts = this.state.posts;
    let filteredPosts = this.state.filteredPosts;
    let deletedPost = this.state.deletedPost;

    let index = posts.findIndex(post => post.id === deletedPost.id);
    posts.splice(index,1);
    let indexFiltered = filteredPosts.findIndex(post => post.id === deletedPost.id);
    console.log(indexFiltered);

    if(indexFiltered !== -1){
      filteredPosts.splice(indexFiltered,1);
    }

    this.setState({posts: posts, filteredPosts: filteredPosts});
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
      await createPost(postName, postDescription).then(res => {
        this.setState({createdPost: {id: res.data.id, name: res.data.name, description: res.data.description}, 
          message: "Se ha creado el post: " + res.data.name})
      });
    }

    let posts = this.state.posts;
    let createdPost = this.state.createdPost;
    posts.push(createdPost);
    this.setState({posts: posts});
  }

  handleFilter(event){
    event.preventDefault();

    const filterContent = this.state.filterContent;
    const posts = this.state.posts;

    if(filterContent){
      const filteredPosts = posts.filter(post => post.name.toLowerCase().includes(filterContent.toLowerCase()));

      this.setState({filteredPosts: filteredPosts});
    } else {
      this.setState({filteredPosts: []});
    }
  }

  handleCloseMsg(){
    this.setState({message: null});
  }

  render() {

    const {posts, message, filteredPosts, isLoading} = this.state;

  	return (
  		<Page message={message} isLoading={isLoading} filteredPosts={filteredPosts} posts={posts} handleFilter={this.handleFilter} handleCloseMsg={this.handleCloseMsg} handleInputChange={this.handleInputChange} handleDelete={this.handleDelete} handleSubmit={this.handleSubmit} />
  	);

  }

}

export default MainView;