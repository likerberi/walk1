import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null, // byte, 
            userName: '',
            age: '',
            job: '',
            fileName: '', // 
        }
    }
                // inner variable
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            });
        
        this.setState({
            file: null, // byte, 
            userName: '',
            age: '',
            job: '',
            fileName: '', // 
        })
        window.location.reload();
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('age', this.state.age);
        formData.append('job', this.state.job);

        const config = {
            headers: {  // for server, when a file has.
                'content-type': 'multipart/form-data' 
            }
        }
        return post(url, formData, config); // file transport F/W by config
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Add Customer</h1>
                Profile Image: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /> <br/>
                Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/> <br/>
                Age: <input type="text" name="age" value={this.state.age} onChange={this.handleValueChange} /> <br/>
                Job: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /> <br/>
            
                <button type="submit" >SUBMIT</button>
            </form>
        )
    }
}

export default CustomerAdd;