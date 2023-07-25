import axios from "axios";
import React, { Component } from "react";
import './LoginPage.css';

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/g')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <center>
      <table border={1}>
      <thead>
        <tr>
          <th>S no</th>
          <th>Email ID</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.sno}</td>
            <td>{user.emailid}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
    );
  }}
  
export default Showdata;
