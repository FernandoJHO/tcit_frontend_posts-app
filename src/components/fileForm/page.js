import React, { Fragment } from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  CustomInput
} from 'reactstrap';

function Page(props){

    const {
        handleSubmitS3,
        handleFileChange,
        fileName,
    } = props;

    return (

        <Fragment>
            <Form onSubmit={handleSubmitS3}>
                <FormGroup row> 
                    <Col>
                        <CustomInput type="file" name="file" id="file" label={fileName || "Selecciona un archivo"} onChange={handleFileChange} required/>
                    </Col>
                    <Col>
                        <Button outline type="submit" color="primary" block> Prueba S3 </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Fragment>

    );

}

export default Page;