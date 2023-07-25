// import React, { useState } from 'react';
// import './Login.css';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './Google';

// import {Link} from "react-router-dom"

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

 

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform login logic here
//     console.log('Login form submitted');
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//         <div className='logo'>
//           <div className="back">
//       <Link to="/">
//           <button>Back</button>
//         </Link>
//         </div>
      
//     <div className="login-page">
      
//     <div className="login1-page">
//       <div className="login-container">
//         <h2>Sign In</h2>
//         <p className='ab'>.....................................................................................</p>
//         <form onSubmit={handleSubmit}>
//             <h4 className='a'>Email:</h4>
//           <input className='logininput'
//           type="email"
//           value={email}
//           name="email"
//           placeholder="Enter your Email"
//           onChange={handleEmailChange} 
//           required/> 

//           <h4 className='a'>Password:</h4>  
//           <input className='logininput' 
//           type="password" 
//           value={password}
//           name="password" 
//           placeholder="Enter your Password" 
//           onChange={handlePasswordChange} 
//           required/>

//            <button className='but' type="submit"><Link to="/"><b>Login</b></Link></button>
//           <h3>-------- or --------</h3>
//           <center><div className='google'><GoogleOAuthProvider clientId="">
//           <Google />
//         </GoogleOAuthProvider></div> </center>
//         </form>
//           <br/><h4 className='ad'>New User?</h4>
//           <div className="create"><Link to="/SignupPage"><div className="b"><u>Create New Account</u></div></Link></div>  
//           </div>
//       </div>
//       <div>
//     </div>
//     </div></div>
//   );
// };

// export default LoginPage;

// import React,{Component} from 'react';
// import './Login.css';
// import axios from 'axios';
// import {Link} from "react-router-dom"

// class ValidatingForm extends Component{

//     constructor(props){
//         super(props);
//         this.state={
//             sno:'',
//             emailid:'',
//             password:'',
//         };
//     }
//     handleSnoChange=(event)=>{
//       this.setState({sno:event.target.value})
//   };
//     handleEmailidChange=(event)=>{
//         this.setState({emailid:event.target.value})
//     };
//     handlePasswordChange=(event)=>{
//         this.setState({password:event.target.value})
//     };
   

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const data = {
//             sno:this.state.sno,
//             emailid: this.state.emailid,
//             password: this.state.password,
//         };
        
//         axios.post('http://127.0.0.1:8080/p', data)
//     }
//     render(){

//     return ( 
//         <><center>
//         <div className='container'>
//         <form onSubmit={this.handleSubmit}>
//         <h2>Sign In</h2>
//         <p className='ab'>__________________________</p>
//             <div className='row'>
//                 <label>Sno </label><br></br>
//                 <input type="number" id='Employeeid' placeholder=' Enter your sno...' value={this.state.sno}
//                     onChange={this.handleSnoChange}/>
//                     </div>
//             <div className='row'>
//                 <label>Email id </label><br></br>
//                 <input type="text" id='sno' placeholder='enter your emailid' value={this.state.emailid}
//                     onChange={this.handleEmailidChange}/>
//             </div>
//             {/* <p  style={{color:"red"}}>{formErrors.sno}</p> */}

//             <div className='row'>
//                 <label>Password: </label><br></br>
//                 <input type="text" id='animename' placeholder='  Enter your password' value={this.state.password}
//                     onChange={this.handlePasswordChange}/>
//             </div>
//             {/* <p  style={{color:"red"}}>{formErrors.Animename}</p> */}
            
//             {/* <p  style={{color:"red"}}>{formErrors.price}</p> */}
            
//             {/* <p  style={{color:"red"}}>{formErrors.team}</p><br></br> */}
//             <br></br>

//             <div className='row'>
//                 <button className='mapla'>Submit</button>
//             </div>
//             <h3>-------- or --------</h3>
//             <h4 className='ad'>New User?</h4>
//            <div className="create"><Link to="/SignupPage"><div className="b"><u>Create New Account</u></div></Link></div> 
//         </form>
        
//         </div></center>  
//         </>
//      );
//     }
// }

// export default ValidatingForm


// Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'email') setEmail(value);
//     else if (name === 'password') setPassword(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//     };

//     axios
//       .post('http://localhost:8080/api/login', data)
//       .then((response) => {
//         console.log('Login successful:', response.data);
//         // Handle successful login, such as redirecting to another page
//       })
//       .catch((error) => {
//         console.error('Login error:', error);
//         // Handle login error, such as displaying an error message
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


import React, { useState,useEffect } from 'react';
import './Login.css';
import { login } from "./userSlice";
import axios from 'axios'


import {Link, useNavigate} from "react-router-dom"

const SigninPage = () => {


  const[user,setUser]=useState({});
  

  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  
  // const [email, setEmail] = useState('')

  const handleSubmit= async (e)=>{
    e.preventDefault();
    
  try{
    const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        "name":username,
        "password":password
    });
    navigate('/Navbar');
    let token=response.data.token;
    let user=response.data.id;
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
}
catch(error){
    window.alert("Incorrect Username or Password !!!");
}
}
    
  return (
        <div className='logo'>
      
    <div className="login-page">
      
    <div className="login1-page">
      <div className="login-container">
        <h2>Sign In</h2>
        <p className='ab'>.....................................................................................</p>
        <pre><Link to="/"><button className="btn-1">Admin</button></Link><Link to="/Signin1"><button className="btn-2">User</button></Link></pre>
        <br/>
        <form onSubmit={handleSubmit}>
            <h4 className='a'>Username:</h4>
          <input className='logininput'
          type="text"
          value={username}
          name="username"
          onChange={(event) => setUsername(event.target.value)} 
          placeholder="Enter your Username"
          required/> 

{/* <label name="username">USERNAME</label>
       <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  required/> */}

          <h4 className='a'>Password:</h4>  
          <input className='logininput' 
          type="password" 
          value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your Password" 
          required/>

           <button onSubmit={(e) => handleSubmit(e) } className='but' type="submit">Login</button>
          <h3>------ or ------</h3>
          <center><div className="google" id='signInDiv' ></div></center><br/>
        </form>
          <br/><h4 className='ad'>New User?</h4>
          <div className="create"><Link to="/Signup"><div className="b"><u>Create New Account</u></div></Link></div>  
          </div>
      </div>
      <div>
    </div>
    </div></div>
    
  );
};

export default SigninPage;