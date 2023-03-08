import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
//import HomeCarousel from './components/HomeCarousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import { RetailerSignUp } from './components/RetailerSignUp';
import { CompanySignUp } from './components/CompanySignUp';
import SelectRole from './components/SelectRole';
import Feedback from './components/feedback';
import AboutUs from './components/aboutus';
import SelectLoginRole from './components/SelectLoginRole';
import { RetailerLogin } from './components/RetailerLogin';
import { CompanyLogin } from './components/CompanyLogin';
import RetailerHomePage from './components/RetailerHomePage';
import CompanyHomePage from './components/CompanyHomePage';
import ProductsByCategory from './components/ProductsByCategory';
import Cart from './components/Cart';
function App() {
   
    

  return (
    <BrowserRouter>
          
          <div>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/home" element={<HomePage/>}/>
                  <Route path="/signup" element={<SelectRole/>}/>
                  <Route path="/signup/retailer" element={<RetailerSignUp/>}/>
                  <Route path="/signup/company" element={<CompanySignUp/>}/>

                  <Route path="/login" element={<SelectLoginRole/>}/>
                  <Route path="/login/retailer" element={<RetailerLogin/>}/>
                  <Route path="/login/company" element={<CompanyLogin/>}/>
                  <Route path="/feedback" element={<Feedback/>}/>
                  <Route path="/about" element={<AboutUs/>}/>

                  <Route path="/retailer/home" element={<RetailerHomePage/>}/>
                  <Route path="/company/home" element={<CompanyHomePage/>}/>
                  <Route path="/category/:categoryName" element={<ProductsByCategory/>}/>

                  <Route path='/retailer/cart' element={<Cart/>}/>
                  {/* <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/register" element={<RegisterPage/>}/> */}

                  {/* <Route path="/profile" element={
                      <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                          <ProfilePage/>
                      </AuthGuard>
                  }
                  /> */}

                  {/* <Route path="/admin" element={
                      <AuthGuard roles={[Role.ADMIN]}>
                          <AdminPage/>
                      </AuthGuard>
                  }/> */}

                  {/* <Route path="/404" element={<NotFoundPage/>}/>
                  <Route path="/401" element={<UnauthorizedPage/>}/>
                  <Route path="*" element={<NotFoundPage/>}/> */}
              </Routes>
          </div>
      </BrowserRouter>
    // <div className="App">
    //   <Header/>
    //   <HomeCarousel/>
    // </div>
  );
}

export default App;
