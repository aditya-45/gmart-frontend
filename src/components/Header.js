import React from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const renderCategory= (value) =>{
        //event.preventDefault();
        console.log(value);
        navigate('/category/'+value);
      } ;

  return (
    <div>
        
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
    
    <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="/" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="display-5 text-primary m-0">GMart</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/home" className="nav-item nav-link active">Home</a>
                    <a href="/about" className="nav-item nav-link">About</a>
                    <a href="/signup/company" className="nav-item nav-link">PartnerWithUs</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</a>
                        <div className="dropdown-menu border-light m-0">
                            <a onClick={ () => renderCategory("GROCERY_STAPLES")} value="GROCERY_STAPLES" className="dropdown-item">Grocery Staples</a>
                            <a onClick={ () => renderCategory("DAILY_ESSENTIALS")} value="DAILY_ESSENTIALS" className="dropdown-item">Daily Essential</a>
                            <a onClick={ () => renderCategory("ELECTRONICS")} value="ELECTRONICS" className="dropdown-item">Electronics</a>
                            <a onClick={ () => renderCategory("PERSONAL_CARE")} value="PERSONAL_CARE" className="dropdown-item">Personal Care</a>
                            <a onClick={ () => renderCategory("BED_BATH")} value="BED_BATH" className="dropdown-item">Bed and Bath</a>
                            <a onClick={ () => renderCategory("HOME_APPLIANCES")} value="HOME_APPLIANCES" className="dropdown-item">Home Appliances</a>
                            <a onClick={ () => renderCategory("CROCKERY")} value="CROCKERY" className="dropdown-item">Crockery</a>
                            <a onClick={ () => renderCategory("FOOTWEAR")} value="FOOTWEAR" className="dropdown-item">Footwear</a>
                            <a onClick={ () => renderCategory("LUGGAGE")} value="LUGGAGE" className="dropdown-item">Luggage</a>
                            <a onClick={ () => renderCategory("TOYS_GAMES")} value="TOYS_GAMES" className="dropdown-item">Toys and Games</a>
                            <a onClick={ () => renderCategory("HOME_APPLIANCES")} value="HOME_APPLIANCES" className="dropdown-item">Home Appliances</a>
                            <a onClick={ () => renderCategory("KID_APPAREL")} value="KID_APPAREL" className="dropdown-item">Kid Apparel</a>
                            <a onClick={ () => renderCategory("WOMEN_APPAREL")} value="WOMEN_APPAREL" className="dropdown-item">Men Apparel</a>
                            <a onClick={ () => renderCategory("MEN_APPAREL")} value="MEN_APPAREL" className="dropdown-item">Women Apparel</a>
                            <a onClick={ () => renderCategory("PLASTIC_CONTAINERS")} value="PLASTIC_CONTAINERS" className="dropdown-item">Plastics and Container</a>
                            <a onClick={ () => renderCategory("DAIRY_FROZEN")} value="DAIRY_FROZEN" className="dropdown-item">Daily Frozen</a>
                        </div>
                    </div>
                    <a href="#foot" className="nav-item nav-link">Contact</a>
                    <a href="/feedback" className="nav-item nav-link">Feedback</a>

                    
                </div>
                <a href="/login"><button  className="btn btn-primary h-50">Login</button></a>&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="/signup"><button  className="btn btn-primary h-50">Sign Up</button></a>
            </div>
        </nav>
        </div>
        </div>
    
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="/">My Website</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav classNameName="mr-auto">
    //       <Nav.Link href="/">Home</Nav.Link>
    //       <Nav.Link href="/about">About</Nav.Link>
    //       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav classNameName="ml-auto">
    //       <Nav.Link href="/contact">Contact</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default Header;
