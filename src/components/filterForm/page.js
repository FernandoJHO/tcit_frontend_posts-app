import React, { Fragment } from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

function Page(props){

  const {
    handleInputChange,
    handleFilter,
  } = props;

  return (

    <Fragment>
      <Form onSubmit={handleFilter}>
        <FormGroup row>
          <Col>
            <Input type="text" name="filterContent" id="filterContent" placeholder="Ingresa un nombre" onChange={handleInputChange}/>
          </Col>
          <Col>
            <Button outline type="submit" color="primary" block> Buscar </Button>
          </Col>
        </FormGroup>
      </Form>
    </Fragment>

  );

}

export default Page;