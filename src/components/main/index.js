import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import setMessage from '../../redux/actions/setMessage';

class MainView extends Component {

  constructor(props){
    super(props);
    this.state = {
    };

    this.handleCloseMsg = this.handleCloseMsg.bind(this);
  }

  componentDidMount() {

    document.title = "Posts App"
    
  } 

  handleCloseMsg(){
    this.props.setMessage(null);
  }

  render() {

    const { flashMessage } = this.props;

  	return (
  		<Page message={flashMessage} handleCloseMsg={this.handleCloseMsg} />
  	);

  }

}

const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashMessage,
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    setMessage: message => dispatch(setMessage(message)),
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);