import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomeCardComponent = () => {
    //D:\Project\gmart\public\images\carousel-1.jpg

    const navigate = useNavigate();
    const handleRetailer = () => {
        navigate('/signup/retailer');
    }

    const handleCompany = () => {
        navigate('/signup/company');
    }
    return (

        <div className="container">
            <div className="row m-2">
                <div className="card col-md-5 w-50 h-50 retail" onClick={handleRetailer}>
                    <img className="card-img-top" src="..\..\images\rs1.jpg" alt="Card image cap"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Retail Store Owner</h5>
                        
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 w-25 h-100">
                    <div className="card m-1 w-100" onClick={handleCompany}>
                        <img className="card-img-top" src="..\..\images\i1.jpg" alt="Card image cap"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Company</h5>
                            
                        </div>
                    </div>
                    <div className="card m-1 w-100 ">
                        <img className="card-img-top" src="..\..\images\n2.jpg" alt="Card image cap"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Nearby Store</h5>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
       
        // <div className="home-card">
        //     <div className="home-card-content">
        //         
        //             <div className="card bg-dark text-white col-md-3">

        //                 <img className="card-img" src="..\..\images\carousel-1.jpg" alt="Background image"></img>
        //                 <div className="card-img-overlay">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">Some example text.</p>
        //                 </div>
        //             </div>
        //             <div className="card bg-dark text-white col-md-3">

        //                 <img className="card-img" src="..\..\images\carousel-1.jpg" alt="Background image"></img>
        //                 <div className="card-img-overlay">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">Some example text.</p>
        //                 </div>
        //             </div>
        //             <div className="card bg-dark text-white col-md-3">

        //                 <img className="card-img" src="..\..\images\carousel-1.jpg" alt="Background image"></img>
        //                 <div className="card-img-overlay">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">Some example text.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default HomeCardComponent;