// import React, { useState } from 'react';
// import './Signup.css';
// import {Link} from "react-router-dom"

// const SignupPage = () => {
//      const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmpassword, setConfirmPassword] = useState('');
//     const [mobile, setMobile] = useState('');
  
//     const handleNameChange = (event) => {
//         setName(event.target.value);
//       };
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handlePasswordChange = (event) => {
//       setPassword(event.target.value);
//     };
    
//     const handleConfirmPasswordChange = (event) => {
//       setConfirmPassword(event.target.value);
//     };

//     const handleMobileChange = (event) => {
//       setMobile(event.target.value);
//     };

//     const handleupSubmit = (event) => {
//       event.preventDefault();
//      alert.window("Account Created Successfully");
//       console.log('Name:', name);
//       console.log('Email:', email);
//       console.log('Mobile:', mobile);
//       console.log('Password:', password);
//       console.log('Confirm Password:', confirmpassword);
//     };

//   return (
//     <div className='logo1'>
//       <div className="back">
//       <Link to="/">
//           <button>Back</button>
//         </Link>
//         </div>
//     <div className="signup-page"> 
//     <div className="signup1-page">
//       <div className="signup-container">
//       <h2>Create Your Account</h2>
//       <p className='ab1'>.....................................................................................</p>
//          <form onSubmit={handleupSubmit}>
//          <h4 className='a1'>Username:</h4>
//            <input
//             type="text"
//             className='signupinput'
//             placeholder="Enter your Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />

//         <h4 className='a1'>Email:</h4>
//          <input
//             type="email"
//             className='signupinput'
//             placeholder="Enter your Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />

//           <h4 className='a1'>Mobile No:</h4>
//           <input
//             type="tel"
//             className='signupinput'
//             placeholder="Enter your Mobile Number"
//             onChange={handleMobileChange}
//             required
//           />

//           <h4 className='a1'>Password:</h4>
//           <input
//             type="password"
//             className='signupinput'
//             placeholder="Enter New Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />

//           <h4 className='a1'>Confirm Password:</h4>
//           <input
//             type="password"
//             className='signupinput'
//             placeholder="Renter New Password"
//             value={confirmpassword}
//             onChange={handleConfirmPasswordChange}
//             required
//           /><br/>
//           {/* <button type="submit" className='signupbutton'><Link to="/"><b>Sign Up</b></Link></button> */}
//           <button type="submit" className='signupbutton'><b>Sign Up</b></button>
//             <h3>------- or --------</h3>
//         </form>
//         <h4 className='a1'>Existing User?</h4>
//           {/* <div className="create1"><Link to="/login"><div className="b1"><u>Log Into Your Account</u></div></Link></div>   */}
//           <div className="create1"><Link to="/login"><div className="b1"><u>Log Into Your Account</u></div></Link></div>
//           </div>
//       </div>
//     </div>
    
//     </div>
//   );
// };

// export default SignupPage;

// import React,{Component} from 'react';
// import './Signup.css'
// import axios from 'axios'

// class ValidatingForm extends Component{

//     constructor(props){
//         super(props);
//         this.state={
//             sno:'',
//             name:'',
//             email:'',
//             mobile:'',
//             password:'',
//             cpassword:''
//         };
//     }
    
//     handleSnoChange=(event)=>{
//         this.setState({sno:event.target.value})
//     };
//     handleUsernameChange=(event)=>{
//         this.setState({name:event.target.value})
//     };
//     handleEmailChange=(event)=>{
//         this.setState({email:event.target.value})
//     };
//     handleMobileChange=(event)=>{
//         this.setState({mobile:event.target.value})
//     };
//     handlePasswordChange=(event)=>{
//         this.setState({password:event.target.value})
//     };
//     handleCPasswordChange=(event)=>{
//       this.setState({cpassword:event.target.value})
//   };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const data = {
//             sno: this.state.sno,
//             name: this.state.name,
//             email: this.state.email,
//             mobile: this.state.mobile,
//             password: this.state.password,
//             cpassword: this.state.cpassword
//         };
        
//         axios.post('http://127.0.0.1:8080/p', data)
//   .then(response => {
//     // Handle successful response if needed
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('AxiosError:', error);
//   });

//     }
//     render(){

//     return ( 
//         <><center>
//         <div className='container'>
//         <form onSubmit={this.handleSubmit}>
//             <h1>ログイン</h1>
            
//             <div className='row'>
//                 <label>S.No : </label><br></br>
//                 <input type="number" id='sno' placeholder='S no' value={this.state.sno}
//                     onChange={this.handleSnoChange}/>
//             </div>
//             {/* <p  style={{color:"red"}}>{formErrors.sno}</p> */}

//             <div className='row'>
//                 <label>Username : </label><br></br>
//                 <input type="text" id='animename' placeholder='  Enter the User name...' value={this.state.name}
//                     onChange={this.handleUsernameChange}/>
//             </div>
//             {/* <p  style={{color:"red"}}>{formErrors.Animename}</p> */}

//             <div className='row'>
//                 <label>Email Id :</label><br></br>
//                 <input type="text" id='mainlead' placeholder=' email ' value={this.state.email}
//                     onChange={this.handleEmailChange}/>
//                     </div>
            
//             {/* <p  style={{color:"red"}}>{formErrors.Maincharacter}</p> */}

//             <div className='row'>
//                 <label>Mobile No : </label><br></br>
//                 <input type="number" id='noofepisodes' placeholder='  mobile no  ' value={this.state.mobile}
//                     onChange={this.handleMobileChange}/>
//             </div>
//             {/* <p  style={{color:"red"}}>{formErrors.noofepisodes}</p> */}

//             <div className='row'>
//                 <label>Password :</label><br></br>
//                 <input type="text" id='rating' placeholder='  password ' value={ this.state.password}
//                     onChange={this.handlePasswordChange}/>
//             </div>
//             <div className='row'>
//                 <label>Confirm Password :</label><br></br>
//                 <input type="text" id='rating' placeholder='  password ' value={ this.state.cpassword}
//                     onChange={this.handleCPasswordChange}/>
//             </div>
            
//             {/* <p  style={{color:"red"}}>{formErrors.price}</p> */}
            
//             {/* <p  style={{color:"red"}}>{formErrors.team}</p><br></br> */}

//             <div className='row'>
//                 <button className='btn btn-primary'>Submit</button>
//             </div>
//         </form>
//         </div></center>
//         </>
//      );
//     }
// }

// export default ValidatingForm


import React, { useState } from 'react';
import './Signup.css';
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'



const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    // const [registrationError,setRegistrationError] = useState('');
    const navigate=useNavigate();

    const checkPassword = (e) =>{
      const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        window.alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        initialize1()
        return;
      }
      else if (password !== confirmpassword) {
        window.alert("Passwords do not match.");
        initialize2()
        return;
      }
      else{
        window.alert("Registration Successful !!!");
      }
    }
    const initialize1 = () =>{
      setPassword('')
      setConfirmPassword('')
    }
    const initialize2 = () =>{
      setConfirmPassword('')
    }
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };

    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/api/v1/auth/register",
          {
            name,
            email,
            mobile,
            password,
            // confirmpassword,
          },
        );
  
        console.log("Sign in successful");
        console.log(response.data); 
        navigate('/');
  
        // setName("");
        // setEmail("");
        // setMobile("");
        // setPassword("");
        // setRegistrationError("");
      } catch (error) {
        console.error("Registration failed");
        console.error(error); 
  
      }
  }
    
  return (
    <div className='logo1'>
    <div className="signup-page"> 
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Create Your Account</h2>
      <p className='ab1'>.....................................................................................</p>
         <form onSubmit={handleSubmit}>
         <h4 className='a1'>Username:</h4>
           <input
            type="text"
            className='signupinput'
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            required
          />

        <h4 className='a1'>Email:</h4>
         <input
            type="email"
            className='signupinput'
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <h4 className='a1'>Mobile No:</h4>
          <input
            type="tel"
            className='signupinput'
            pattern="\d{10}$"
            title="Mobile no. must contain 10 Numbers"
            placeholder="Enter your Mobile Number"
            value={mobile}
            onChange={handleMobileChange}
            required
          />

          <h4 className='a1'>Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <h4 className='a1'>Confirm Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Re Enter New Password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
            required
          /><br/>
          <button type="submit" onClick={checkPassword} className='signupbutton'><b>Sign Up</b></button>
            <h3>----- or ------</h3>
        </form>
        <h4 className='a1'>Existing User?</h4>
          <div className="create1"><Link to="/"><div className="b1"><u>Log Into Your Account</u></div></Link></div>  
          </div>
      </div>
    </div>
    
    </div>
  );
};

export default SignupPage;