import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignUpPage';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Policy from './Policy';
import board from './board';

import Payment from './Payment';
// import Empdetails from "./Empdetails";
// import Empbirthday from "./Empbirthday"; 

function App() {
	return (
		<React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Navbar" element={<Navbar/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        {/* <Route path="/Navbar" element={<Navbar/>}/> */}
        <Route path="/SignupPage" element={<SignupPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        {/* <Route path="/Profile" element={<Profile/>}/> */}
        <Route path="/Payment" element={<Payment/>}/>
        {/* <Route path="/Profile" element={<board/>}/> */}
      <Route component={Error} />
      </Routes>
      </BrowserRouter>
			
		</React.Fragment>
	);
}

export default App;