import React, { Fragment } from 'react';
import {
  Button,
  Table,
  Spinner
} from 'reactstrap';

function Page(props){

  const {
    isLoading,
    filteredPosts,
    posts,
    handleDelete,
  } = props;

  var loader = null;

  const postsList = posts.map(post => {

    return (<tr key={post.id}>
        <td>{post.name}</td>
        <td>{post.description}</td>
        <td><Button outline color="danger" onClick={() => handleDelete(post.id)} size="sm"> Eliminar </Button></td>
      </tr>
      );

  });

  const filteredPostsList = filteredPosts.map(post => {

    return (<tr key={post.id}>
        <td>{post.name}</td>
        <td>{post.description}</td>
        <td><Button outline color="danger" onClick={() => handleDelete(post.id)} size="sm"> Eliminar </Button></td>
      </tr>
      );

  });

  if(isLoading){
    loader = <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="info" />;
  }

  return (

    <Fragment>
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
    </Fragment>

  )

}

export default Page;