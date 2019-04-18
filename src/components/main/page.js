import React, { Fragment } from 'react';
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
import CreateForm from '../createForm';
import PostsList from '../postsList';
import FilterForm from '../filterForm'

function Page(props) {

	const {
		handleFilter,
		handleInputChange,
		handleSubmit,
		handleCloseMsg,
		handleDelete,
		message,
		isLoading,
		filteredPosts,
		posts,
	} = props;

	var messageAlert = null;
	//var loader = null;

    if(message){

      messageAlert = (<Alert color="info">{message} <Button close onClick={handleCloseMsg}/></Alert>);
    }

    // if(isLoading){
    //   loader = <Spinner color="info" />;
    // }

    // const postsList = posts.map(post => {

    //   return (<tr key={post.id}>
    //       <td>{post.name}</td>
    //       <td>{post.description}</td>
    //       <td><Button outline color="danger" onClick={() => handleDelete(post.id)} size="sm"> Eliminar </Button></td>
    //     </tr>
    //     );

    // });

    // const filteredPostsList = filteredPosts.map(post => {

    //   return (<tr key={post.id}>
    //       <td>{post.name}</td>
    //       <td>{post.description}</td>
    //       <td><Button color="danger" onClick={() => handleDelete(post.id)}> Eliminar </Button></td>
    //     </tr>
    //     );

    // });

	return (

		<Fragment>

	      <div>
	        

	          
	          <Card>
	            <CardHeader className="text-center"> Posts App </CardHeader>
	            <CardBody className="text-center">

	              <Container fluid>
	              	<FilterForm handleFilter={handleFilter} handleInputChange={handleInputChange} />
	              </Container>

	              <br/>
	              {messageAlert}
	              <br/>

	              <Container fluid>
	              	<PostsList isLoading={isLoading} filteredPosts={filteredPosts} posts={posts} handleDelete={handleDelete} />
	              </Container>

	              <br/>

	              <Container fluid>
	              	<CreateForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
	              </Container>

	            </CardBody>
	          </Card>
	          

	        
	      </div>

		</Fragment>

	);

}

export default Page;