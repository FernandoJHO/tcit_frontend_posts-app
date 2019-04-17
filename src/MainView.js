import React, { Component } from 'react';
import axios from 'axios';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Table,
  Spinner
} from 'reactstrap';

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
    this.state = {posts: [], filteredPosts: [], isLoading: false, deletedPost: {id: null, name: null, description: null}, createdPost: {id: null, name: null, description: null}, message: null};

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
      this.setState({deletedPost: {id: res.data.id, name: res.data.name, description: res.data.description}, message: "Se ha eliminado el post: " + res.data.name})});

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
        this.setState({createdPost: {id: res.data.id, name: res.data.name, description: res.data.description}, message: "Se ha creado el post: " + res.data.name})});
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

    var messageAlert = null;
    var loader = null;

    if(message){

      messageAlert = (<Alert color="info">{message} <Button close onClick={this.handleCloseMsg}/></Alert>);
    }

    if(isLoading){
      loader = <Spinner color="info" />;
    }

    const postsList = posts.map(post => {

      return (<tr key={post.id}>
          <td>{post.name}</td>
          <td>{post.description}</td>
          <td><Button outline color="danger" onClick={() => this.handleDelete(post.id)} size="sm"> Eliminar </Button></td>
        </tr>
        );

    });

    const filteredPostsList = filteredPosts.map(post => {

      return (<tr key={post.id}>
          <td>{post.name}</td>
          <td>{post.description}</td>
          <td><Button color="danger" onClick={() => this.handleDelete(post.id)}> Eliminar </Button></td>
        </tr>
        );

    });

    return (

      <div>
        

          
          <Card>
            <CardHeader className="text-center"> Posts App </CardHeader>
            <CardBody className="text-center">

              <Container fluid>
                <Form onSubmit={this.handleFilter}>
                  <FormGroup row>
                    <Col>
                      <Input type="text" name="filterContent" id="filterContent" placeholder="Ingresa un nombre" onChange={this.handleInputChange}/>
                    </Col>
                    <Col>
                      <Button outline type="submit" color="primary" block> Buscar </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Container>

              <br/>
              {messageAlert}
              <br/>

              <Container fluid>
              {loader ||
                <Table hover>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPostsList.length ? filteredPostsList : postsList}
                  </tbody>
                </Table>
              }
              </Container>

              <br/>

              <Container fluid>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col>
                      <Input type="text" name="postName" id="postName" placeholder="Nombre" onChange={this.handleInputChange} required/>
                    </Col>
                    <Col>
                      <Input type="text" name="postDescription" id="postDescription" placeholder="Descripción" onChange={this.handleInputChange} required/>
                    </Col>
                    <Col>
                      <Button outline type="submit" color="success" block> Crear </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Container>

            </CardBody>
          </Card>
          

        
      </div>

    );
  }

}

export default MainView;