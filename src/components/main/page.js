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

    if(message){

      messageAlert = (<Alert color="info">{message} <Button close onClick={handleCloseMsg}/></Alert>);
    }

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