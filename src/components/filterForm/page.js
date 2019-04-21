import React, { Fragment } from 'react';
import {
  Col,
  FormGroup,
  Input
} from 'reactstrap';

function Page(props){

  const {
    handleInputChange,
  } = props;

  return (

    <Fragment>
      
        <FormGroup row>
          <Col>
            <Input type="text" name="filterContent" id="filterContent" placeholder="Búsqueda por nombre" onChange={handleInputChange}/>
          </Col>
        </FormGroup>
      
    </Fragment>

  );

}

export default Page;