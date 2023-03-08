import React from 'react';
import Header from './Header';

import '../css/style.css';
//import image1 from '../img/about.jpg'; 
import '../lib/animate/animate.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
const AboutUs = () => {
  return (
    <div>
      

   <Header/>

   {/* <!-- About Start --> */}
   <div className="container-xxl py-5">
       <div className="container">
           <div className="row g-4 align-items-end mb-4">
               <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                   <img className="img-fluid rounded" src="..\..\images\about.jpg"/>
               </div>
               <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                   <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">About Us</p>
                   <h1 className="display-5 mb-4">Contact us to Know us more</h1>
                   <p className="mb-4">write lot of description here related to about us and save it
                   </p>
                   <div className="border rounded p-4">
                       <nav>
                           <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                               <button className="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab"
                                   data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story"
                                   aria-selected="true">Story</button>
                               <button className="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab"
                                   data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission"
                                   aria-selected="false">Mission</button>
                               <button className="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab"
                                   data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision"
                                   aria-selected="false">Vision</button>
                           </div>
                       </nav>
                       <div className="tab-content" id="nav-tabContent">
                           <div className="tab-pane fade show active" id="nav-story" role="tabpanel"
                               aria-labelledby="nav-story-tab">
                               <p className="mb-0">This will appeare inside story line no 1 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside story line no 2 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside story line no 3 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside story line no 4 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside story line no 5 inside a box on about us page</p>
                               
                           </div>
                           <div className="tab-pane fade" id="nav-mission" role="tabpanel"
                               aria-labelledby="nav-mission-tab">
                               <p className="mb-0">This will appeare inside mission line no 1 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside mission line no 2 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside mission line no 3 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside mission line no 4 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside mission line no 5 inside a box on about us page</p>
                           </div>
                           <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                               <p className="mb-0">This will appeare inside vision line no 1 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside vision line no 2 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside vision line no 3 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside vision line no 4 inside a box on about us page</p>
                               <p className="mb-0">This will appeare inside vision line no 5 inside a box on about us page</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
               <div className="row g-4">
                   <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                       <div className="h-100">
                           <div className="d-flex">
                               <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                   <i className="fa fa-times text-white"></i>
                               </div>
                               <div className="ps-3">
                                   <h4>write something 1</h4>
                                   <span>desc about write something 1</span>
                               </div>
                               <div className="border-end d-none d-lg-block"></div>
                           </div>
                           <div className="border-bottom mt-4 d-block d-lg-none"></div>
                       </div>
                   </div>
                   <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                       <div className="h-100">
                           <div className="d-flex">
                               <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                   <i className="fa fa-users text-white"></i>
                               </div>
                               <div className="ps-3">
                                   <h4>write something 2</h4>
                                   <span>desc about write something 2</span>
                               </div>
                               <div className="border-end d-none d-lg-block"></div>
                           </div>
                           <div className="border-bottom mt-4 d-block d-lg-none"></div>
                       </div>
                   </div>
                   <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                       <div className="h-100">
                           <div className="d-flex">
                               <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                   <i className="fa fa-phone text-white"></i>
                               </div>
                               <div className="ps-3">
                                   <h4>write something 3</h4>
                                   <span>desc about write something  3</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;

