// // import React from "react";
// // import SimpleImageSlider from "react-simple-image-slider";
// // import { useNavigate } from 'react-router-dom';
// // export default function App() {
// //     const nav = useNavigate();
// //     const handleAbout=()=>{
// //      nav("/About")
// //     }
// //    const sliderImages = [
// //       {
// //          url: "https://i.pinimg.com/236x/ae/ed/ea/aeedeac80aa2f35905a738ba3d4acc28.jpg",
// //       },
// //       {
// //          url: "https://www.oho.com/sites/default/files/2023-03/Untitled%20design%20%289%29.png",
// //       },
// //       {
// //          url: "https://1000logos.net/wp-content/uploads/2021/08/LIC-Logo-768x483.png",
// //       },
// //       {
// //          url: "https://www.shutterstock.com/image-photo/little-girl-play-bedroom-hold-syringe-1809606682",
// //       },
// //       {
// //          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
// //       },
// //       {
// //          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
// //       },
// //       {
// //          url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
// //       },
// //    ];
   
// //    return (
// //       <div>
// //          <h3 class="head">
// //            About Us
// //          </h3>
// //          <div style={{ marginLeft: "70px" ,marginTop:"30px"}}>
// //          <SimpleImageSlider
// //             width={650}
// //             height={650}
// //             images={sliderImages}
// //             showNavs={true}
// //          />
         
// //    </div>
// //          <div>
// //             <p></p>
// //          </div>
// //       </div>
// //    );
// // }

// import React from "react";
// import "./About.css";
// // import SimpleImageSlider from "react-simple-image-slider";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// function About() {
//    const nav = useNavigate();
//         const handleAbout=()=>{
//        nav("/About")
//        }
//   return (
//     <div className="about">
//       <div
//         className="aboutTop"
//         style={{ backgroundImage: `url(https://images.pexels.com/photos/3531895/pexels-photo-3531895.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
//       ></div>
//       <div className="aboutBottom">
//         <h1> ABOUT US</h1>
//         <div className="momo">
//          {/* <img src="https://images.pexels.com/photos/4021810/pexels-photo-4021810.jpeg?auto=compress&cs=tinysrgb&w=600" width={"70px"} height="70px"></img> */}
//         <p>
//         We are dedicated to providing you with comprehensive and accessible health insurance solutions. Our mission is to empower individuals and families by offering a wide range of health insurance plans tailored to meet your unique needs.

// With our portal, you gain access to a multitude of features and benefits designed to simplify your health insurance journey. Whether you're an individual seeking coverage or a business looking for employee benefits, we have you covered.
// <br></br><br></br>

//  ->We offer a diverse selection of health insurance plans, including individual, family, and group policies. Our plans encompass essential medical services, preventive care, prescription medications, and more.

//  <br></br><br></br>->Our user-friendly interface allows you to effortlessly manage your health insurance policies. From viewing coverage details and claim history to making policy updates, it's all just a few clicks away.

//  <br></br><br></br>->We believe in equipping our members with the knowledge to make informed healthcare decisions. Our portal provides access to educational resources, wellness tips, and tools to support your well-being.

//  <br></br><br></br>->Submitting insurance claims shouldn't be a hassle. Our portal streamlines the claims process, allowing you to submit and track claims digitally, saving you time and effort.

 
//         </p>
//         <div className="but5">
//         <Link to="/">
//           <button className="but6">Back</button>
//         </Link>
//         </div>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default About;



import React from 'react';
import './About.css';
import './About.css';
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import logo5 from './reliance.png'
import { Link } from 'react-router-dom';

function About() {
  const handleReadMoreClick = () => {
    const targetSection = document.getElementById('target-section');
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="back">
      <Link to="/Navbar">
          <button>Back</button>
        </Link>

    <div>
      <div className="aboutpage">
        <div>
          <h1 className="firstjanu">Insure Ease</h1>
          <h2 className="animate_animated animate_fadeInUp">Shielded Dreams & Assured Tomorrow</h2>
          <button onClick={handleReadMoreClick} className="animate_animated animate_fadeInUp">Read More</button>
        </div>
        <div>
          <img
            className="phonesee"
            src="https://th.bing.com/th/id/OIP.w6z_jaPamEAKVv2uI1cJOQHaEx?pid=ImgDet&w=600&h=387&rs=1"
            height="400px"
            width="400px"
            alt=""
          />
        </div>
      </div>
      <div className="aboutpage2" id="target-section">
        <div>
          <img
            className="image01 animate_animated animate_fadeInLeft"
            src="https://images.pexels.com/photos/2418338/pexels-photo-2418338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <h1 className="animate_animated animate_fadeInUp">01</h1>
          <br></br>
          <h2 className="animate_animated animate_fadeInUp">EXPLORE YOUR <br></br>PREFERENCES</h2>
          <br></br>
          <h5 className="animate_animated animate_fadeInUp">
            Choose your events based on your location <br></br>date, time, and venue.
          </h5>
        </div>
      </div>
      <div className="aboutpage3">
        <div>
          <h1 className="animate_animated animate_fadeInUp">02</h1>
          <h2 className="animate_animated animate_fadeInUp">CHECK THE<br></br>AVAILABILITY</h2>
          <h5 className="animate_animated animate_fadeInUp">
            Book your seats based on your event preferences <br></br>and availability.
          </h5>
        </div>
        <div>
          <img
            className="image02 animate_animated animate_fadeInRight"
            src="https://images.pexels.com/photos/7081161/pexels-photo-7081161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="aboutpage4">
        <div>
          <img
            className="image03 animate_animated animate_fadeInLeft"
            src="https://th.bing.com/th/id/OIP.aQIxkwjIIFWIKAe-WzPKbAHaE5?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div>
          <h1 className="animate_animated animate_fadeInUp">03</h1>
          <br></br>
          <h2 className="animate_animated animate_fadeInUp">USER FRIENDLY DESIGN</h2>
          <br></br>
          <h5 className="animate_animated animate_fadeInUp">
            After booking your seats, make payments and enjoy your live concerts.
          </h5>
        </div>
      </div>
      <div className="aboutpage5">
        <div>
          <h1>GET THE APP</h1>
        </div>
        <a href="https://play.google.com/store/apps/details?id=your_app_id" className="play-store-button">
          <span>Download on Play Store</span>
          <br></br>
          <logo5 sx={{ fontSize: 25, color: 'white' }} className="person" />
        </a>
      </div>
    </div>
    </div>
  );
}

export default About;