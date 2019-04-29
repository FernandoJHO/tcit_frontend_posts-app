import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiClient from '../../utils/ApiClient'
import Page from './page';
import setMessage from '../../redux/actions/setMessage';

const apiUrl = '/upload_file/';

class FileForm extends Component {

    constructor(props){

        super(props);

        this.state = {

        };

		this.handleSubmitS3 = this.handleSubmitS3.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);

    }

	handleFileChange(event){
		const target = event.target;
		const file = target.files[0];
		const name = target.name;

		this.setState({[name]: file});
	}

	async handleSubmitS3(event){
		event.preventDefault();

		const {file} = this.state;

		if(file){
			let data = new FormData();
			data.append("file", file);
			data.append("name", file.name);
			await ApiClient.post(apiUrl, data).then(res => {
				res.data.estado ? this.props.setMessage(res.data.url) : this.props.setMessage("No se guardó el archivo");
			});

		} 

    }
    
    render() {

		const {file} = this.state;
		var fileName;
		file ? (fileName = file.name) : (fileName = null);

        return (
            <Page handleSubmitS3={this.handleSubmitS3} handleFileChange={this.handleFileChange} fileName={fileName} />
        );

    }

}

const mapDispatchToProps = (dispatch) => {

	return {
		setMessage: message => dispatch(setMessage(message)),
	};

}

export default connect(null, mapDispatchToProps)(FileForm);