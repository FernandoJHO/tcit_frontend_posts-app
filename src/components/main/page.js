import React, { Fragment } from 'react';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container
} from 'reactstrap';
import CreateForm from '../createForm';
import PostsList from '../postsList';
import FilterForm from '../filterForm'
import FileForm from '../fileForm'

function Page(props) {

	const {
		handleCloseMsg,
		message,
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
	              	<FilterForm />
	              </Container>

	              <br/>
	              {messageAlert}
	              <br/>

	              <Container fluid>
	              	<PostsList />
	              </Container>

	              <br/>

	              <Container fluid>
	              	<CreateForm />
	              </Container>

	              <Container fluid>
	              	<FileForm />
	              </Container>

	            </CardBody>
	          </Card>
	          

	        
	      </div>

		</Fragment>

	);

}

export default Page;