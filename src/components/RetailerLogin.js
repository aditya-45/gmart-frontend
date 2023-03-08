import { useEffect, useState } from 'react';
import User from '../models/retailer';
//import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RetailerService from '../services/retailer.service';
//../../images/nearby.jpg
//import '../css/register.page.css';
import '../css/style.css';
import '../lib/animate/animate.min.css';
import '../css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { setCurrentRetailer } from '../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";



const RetailerLogin = () => {

    const [user, setUser] = useState(new User('', ''));
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const location = useLocation();

    const currentRetailer = useSelector(state => state.retailer);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // //mounted
    // useEffect(() => {
    //     //console.log(currentRetailer.id);
    //     if (localStorage.getItem(currentRetailer.username) !== '') {
    //         //navigate
    //         navigate('/retailer/home');
    //     }
    // }, []);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
        setUser(new User(event.target.value, password));
        //console.log(user);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setUser(new User(username, event.target.value));
       // console.log(user);
    }

    

    const handleLogin = (e) => {
      e.preventDefault();

      setSubmitted(true);
      //handleUserChange();
    //   console.log("username "+username+" pwd "+password);
    //   console.log(user);
    //   console.log("username "+user.username+" pwd "+user.password);
   //     console.log("in handle login "+user.email+" "+user.password);
      if (!user.username || !user.password) {
          return;
      }

      setLoading(true);
      
      
      RetailerService.login(user).then(response => {
          console.log("login success "+response.data)
          //set user in session.
          dispatch(setCurrentRetailer(response.data));
        //  console.log("after dispatch");
       
        if(location.state){
            if(location.state.from === "homeBuyNow"){
                navigate('/retailer/cart');
            }
            
        }else{
            navigate('/home');
        }
          
         
      }).catch(error => {
         console.log(error);
         setErrorMessage('username or password is not valid.');
         setLoading(false);
      });
    };
  

    return (
        <div className="container-fluid callback my-5 pt-5">

            <div className="col-lg-7 mx-auto">
                <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp mx-auto" data-wow-delay="0.5s">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>

                        <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon" />
                        <h1 className="display-5 mb-5">Retailer Login</h1>
                        {errorMessage &&
                            <div className="alert alert-danger">
                                {errorMessage}
                            </div>
                        }

                        <form
                            onSubmit={(e) => handleLogin(e)}
                            noValidate
                            className={submitted ? 'was-validated' : ''}
                        >
                            <div className="g-3 m-1 mx-auto">
                                <div className="col-sm-6 col-md-8 mx-auto m-4">
                                    <div className="form-floating">

                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            placeholder="Enter Username"
                                            value={username}
                                            onChange={handleUsernameChange}
                                            required
                                        />
                                        <label htmlFor="username">Username:</label>
                                        <div className="invalid-feedback">
                                            User name is required.
                                        </div>
                                    </div>
                                </div>




                                <div className="col-sm-6 col-md-8 mx-auto m-4">
                                    <div className="form-floating">

                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <label htmlFor="password">Password:</label>
                                        <div className="invalid-feedback">
                                            Password is required.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div className="col-12 text-center">
                                <button className="btn btn-primary w-50 py-3" disabled={loading} >Login</button>
                            </div>

                        </form>

                        <Link to="/signup/retailer" className="btn btn-link" style={{ color: 'darkgray' }}>
                            Create Account!
                        </Link>

                    </div>

                </div>
            </div >
        </div >
    );
};

export { RetailerLogin };
