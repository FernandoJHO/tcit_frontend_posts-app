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

function Page(props){

  const {
    handleInputChange,
    handleSubmit,
  } = props;

  return (

    <Fragment>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Col>
            <Input type="text" name="postName" id="postName" placeholder="Nombre" onChange={handleInputChange} required/>
          </Col>
          <Col>
            <Input type="text" name="postDescription" id="postDescription" placeholder="Descripción" onChange={handleInputChange} required/>
          </Col>
          <Col>
            <Button outline type="submit" color="success" block> Crear </Button>
          </Col>
        </FormGroup>
      </Form>
    </Fragment>

  );

}

export default Page;