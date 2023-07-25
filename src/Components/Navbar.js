// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "react-bootstrap";
// // import React, { useEffect } from 'react';
// // import './Components/Slideshow.js';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Styles/main.css";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
// 	const navRef = useRef();
//     const nav=useNavigate();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};
//     function handleLogin() {
//         nav("/login");
//     }
//     function handleSignupPage() {
//         nav("/SignUpPage");
//     }
//     function handleAbout()
//     {
//         nav("/About");
//     }
// 	return (
//         <div className="hello">
// 		<header>
// 			<h3>MEDCARE+</h3>
// 			<nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">Policy Provider</a>
// 				<a href="/#">policy</a>
// 				<a on onClick={handleAbout}>About Us</a>
//                 <a onClick={handleLogin}>Login</a>
//                 <a  onClick={handleSignupPage}>Sign Up</a>
//                 <a href="#">Contact Us</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
//        <div class="content">
//             <h1>
//                Welcome to MedCare+
//             </h1>
//             </div>
//             <br></br>
//             <div class="wel">
//             <h3>
//             Hello! At MedCare+, we're dedicated to ensuring your health insurance <br></br> experience is as simple as possible. From finding the right plan to staying<br></br> connected with your insurer, our app provides the tools you need to protect<br></br> your health and financial security
//             </h3>
//         </div>
//         <Button variant="default"
//     style={{ color: "white", background: "#002234"}}
// >
//     Get started
// </Button>
// </div>
// 	);
// }
// export default Navbar;


// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Styles/main.css";
// import { useNavigate } from "react-router-dom";
// import SimpleImageSlider from "react-simple-image-slider";

// function Navbar() {
//   const navRef = useRef();
//   const nav = useNavigate();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   function handleLogin() {
//     nav("/login");
//   }

//   function handleSignupPage() {
//     nav("/SignUpPage");
//   }

//   function handleAbout() {
//     nav("/About");
//   }
//   function handlePolicy() {
//     nav("/Policy");
//   }
//   function handleContact() {
//     nav("/Contact");
//   }
//   function handleHome() {
//     nav("/Home");
//   }

//   function toggleDropdown() {
//     const dropdownContent = document.getElementById("dropdown-content");
//     dropdownContent.classList.toggle("show");
//   }
//   const sliderImages = [
//     {
//        url: "https://cdn.graciousquotes.com/wp-content/uploads/2023/05/Insurance-is-the-embodiment-of-preparedness-offering-a-safety-net-when-life-takes-an-unexpected-turn.jpg" ,
//     },
//     {
//        url: "https://www.oho.com/sites/default/files/2023-03/Untitled%20design%20%289%29.png",
//     },
//     {
//        url: "https://1000logos.net/wp-content/uploads/2021/08/LIC-Logo-768x483.png",
//     },
//     {
//        url: "https://www.shutterstock.com/image-photo/little-girl-play-bedroom-hold-syringe-1809606682",
//     },
//     {
//        url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
//     },
//     {
//        url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
//     },
//     {
//        url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
//     },
//  ];

//   return (
//     <div className="hello">
//       <header>
//         <h3>MEDCARE+</h3>
//         <nav ref={navRef}>
//           <a onClick={handleHome}>Home</a>
//           <a onClick={handlePolicy}>Policy</a>
//           <div className="dropdown">
//             <button className="dropbtn" onClick={toggleDropdown}>
//               Dropdown <i className="fa fa-caret-down"></i>
//             </button>
//             <div className="dropdown-content" id="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </div>
//           <a onClick={handleAbout}>About Us</a>
//           <a onClick={handleLogin}>Login</a>
//           <a onClick={handleSignupPage}>Sign Up</a>
//           <a onClick={handleContact}>Contact us</a>
//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <FaTimes />
//           </button>
//         </nav>
//         <button className="nav-btn" onClick={showNavbar}>
//           <FaBars />
//         </button>
//       </header>
//       <div className="content">
//         <h1>Welcome to MedCare+</h1>
//       </div>
//       <br />
//       <div className="wel">
//         <h3>
//           Hello! At MedCare+, we're dedicated to ensuring your health insurance
//           <br />
//           experience is as simple as possible. From finding the right plan to
//           staying
//           <br />
//           connected with your insurer, our app provides the tools you need to
//           protect
//           <br />
//           your health and financial security
//         </h3>
//       </div>
//       <div>
//          <h3 class="head">
//            About Us
//          </h3>
//          <div style={{ marginLeft: "100px" ,marginTop:"40px"}}>
//          <SimpleImageSlider
//             width={600}
//             height={300}
//             images={sliderImages}
//             showNavs={true}
//             ImageComponentStyle={{height: '50px', width: '20px', marginTop: 5}}
//          />
         
//    </div>
//          <div>
//             <p></p>
//          </div>
//       </div>

//     </div>
//   );
// }

// export default Navbar;


import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import { useDispatch,useSelector } from "react-redux";
import { logout,selectUser } from "../userSlice";
function Navbar() {
  const navRef = useRef();
  const nav = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  function handleLogin() {
    nav("/login");
  }

  function handleSignupPage() {
    nav("/SignUpPage");
  }

  function handleAbout() {
    nav("/About");
  }
  function handlePolicy() {
    nav("/Policy");
  }
  function handleContact() {
    nav("/Contact");
  }
  function handleHome() {
    nav("/Home");
  }
  function handleProfile() {
    nav("/Profile");
  }
  function handlePayment() {
    nav("/Payment");
  }

  function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
  }
  
  const sliderImages = [
    {
       url: "https://cdn.graciousquotes.com/wp-content/uploads/2023/05/Insurance-is-the-embodiment-of-preparedness-offering-a-safety-net-when-life-takes-an-unexpected-turn.jpg" ,
    },
    {
       url: "https://www.oho.com/sites/default/files/2023-03/Untitled%20design%20%289%29.png",
    },
    {
       url: "https://1000logos.net/wp-content/uploads/2021/08/LIC-Logo-768x483.png",
    },
    {
       url: "https://www.bajajallianz.com/blog/wp-content/uploads/2020/07/types-of-health-insurance.jpg",
    },
    {
       url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
    },
    {
       url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
    },
    {
       url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
    },
    
 ];

  return (
    <div className="hello">
      <header>
        <h3>MEDCARE+</h3>
        <nav ref={navRef}>
          <a onClick={handleHome}>Home</a>
          <a onClick={handlePolicy}>Policy</a>
          <div className="dropdown">
            {/* <button className="dropbtn" onClick={toggleDropdown}>
              Dropdown <i className="fa fa-caret-down"></i>
            </button> */}
            {/* <div className="dropdown-content" id="dropdown-content"> */}
              {/* <a href="/Policy">Link 1</a> */}
              {/* <a href="#">Link 2</a>
              <a href="#">Link 3</a> */}
            {/* </div> */}
          </div>
          <a onClick={handleAbout}>About Us</a>
          <a onClick={handleLogin}>Login</a>
          <a onClick={handleSignupPage}>Sign Up</a>
          <a onClick={handleContact}>Contact us</a>
          <a onClick={handleProfile}>Edit profile</a>
          <a onClick={handlePayment}>Payment</a>
          {/* <h1>Hello{user.name}</h1> */}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="content">
        <h1>Welcome to MedCare+</h1>
      </div>
      <br />
      <div className="wel">
        <h3>
          Hello! At MedCare+, we're dedicated to ensuring your health insurance
          
          experience is as simple as possible. From finding the right plan to
          staying
          
          connected with your insurer, our app provides the tools you need to
          protect

          your health<br /> and financial security
        </h3>
      </div>
      <div>
         <h3 class="head">
         </h3>
         <div style={{ marginLeft: "30%" ,marginTop:"20px"}}>
         <SimpleImageSlider
            width={600}
            height={400}
            images={sliderImages}
            showNavs={true}
            style={{ display: "block" }}
            ImageComponentStyle={{ height: '250px', width: '450px', marginTop: '5px' }}
         />
         
   </div>
         <div>
            <p></p>
         </div>
      </div>

    </div>
  );
}

export default Navbar;