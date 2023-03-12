import { useState, useContext, useEffect } from "react";
import { CartContext, UserContext } from './UserContext';
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';


const Checkout = () => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);

    const [addresses, setAddresses] = useState([{ id: 1, street: 'street1', locality: 'locality1', city: 'city1', state: 'state1', pincode: '410120' },
    { id: 2, street: 'street2', locality: 'locality3', city: 'city2', state: 'state2', pincode: '410121' },
    { id: 3, street: 'street3', locality: 'locality3', city: 'city3', state: 'state3', pincode: '410122' }]);
    const [selectedAddress, setSelectedAddress] = useState('');


    useEffect(() => {
        if (!user) {
            navigate('/home')
        }

        //fetchAddresses(); //get address from backend
    }, []);


    const handleSelectAddress = (event) => {
        setSelectedAddress(event.target.value);
    };


    const handlePlaceOrder = () => {
        // navigate('/retailer/payment'); //navigate to payment
    }

    const backToCart = () => {
        navigate('/retailer/cart');
    }

    const handlePayment = () => {
        //handle payment option
        navigate('/retailer/payment');
    };

    const getMrp = () => {
        let mrp = 0;
        cart.map((item) => {
            mrp += item.product.mrp * item.quantity;
        });
        return mrp;
    };

    const getDiscount = () => {
        let discount = 0;
        cart.map((item) => {
            discount += (item.product.discount / 100) * item.product.mrp * item.quantity;
        });
        return discount;
    }
    const getTotalPrice = () => {
        let totalPrice = getMrp() - getDiscount();
        return totalPrice;
    };

    //const temp = cart.map((cartItem) => console.log(cartItem));

    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="text-center mx-auto">
                    <h1 className="mx-auto">Checkout</h1>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 mx-auto p-2 m-2 border rounded">
                            <div className="text-center">
                                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Checkout</p>
                            </div>

                            <div className="border rounded p-2">
                                <h4>Choose your delivery address:</h4>
                                {addresses.map((address) => (
                                    <Card key={address.id} className="my-2">
                                        <Card.Body>
                                            <div className="row d-flex align-items-center ">
                                                <div className="col-1 text-center h-50">
                                                    <input
                                                        type="radio"
                                                        name="address"
                                                        value={address.id}
                                                        onChange={handleSelectAddress}
                                                    />
                                                </div>
                                                <div className="col-10">
                                                    <Card.Text>{address.street}, {address.locality}</Card.Text>
                                                    <Card.Text>{address.city}, {address.state}, {address.pincode}</Card.Text>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                            <div className="border rounded p-2 mt-2">
                                <h4>Order Summary:</h4>
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <p className="card-text col-8"><span className="ml-6" style={{ float: 'left' }}>MRP: </span></p>
                                            <p className="card-text col-4"><span className="mr-6" style={{ float: 'right' }}>Rs. {getMrp()}</span></p>
                                        </div>
                                        <div className="row">
                                            <p className="card-text col-8"><span className="ml-6" style={{ float: 'left' }}>Product Discount: </span></p>
                                            <p className="card-text col-4"><span className="mr-6" style={{ float: 'right' }}>Rs. {getDiscount()}</span></p>
                                        </div>
                                        <div className="row">
                                            <p className="card-text col-8"><span className="ml-6" style={{ float: 'left' }}>Delivery Fee: </span></p>
                                            <p className="card-text col-4"><span className="mr-6" style={{ float: 'right' }}>{getTotalPrice() > 1000 ? <span className="text-success">Free</span> : 'Rs. 50'}</span></p>
                                        </div>

                                        <hr />
                                        <div className="row">
                                            <h5 className="card-text text-dark col-8"><span className="ml-6" style={{ float: 'left' }}>Total Price (<span>{cart.length} items</span>): </span></h5>
                                            <p className="card-text col-4"><span style={{ float: 'right' }}>Rs. {getTotalPrice()}</span></p>
                                        </div>

                                        <hr />
                                        <p className="card-text text-success"><span style={{ float: 'left' }}>You will save Rs. {getDiscount()} on the order.</span></p>
                                        <button onClick={backToCart} className="btn btn-warning w-25" style={{float:'right'}}>Go Back to Cart</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <br/>
                            <div className="text-center">
                            <button className="btn btn-primary w-50" onClick={handlePayment}>Proceed to Payment</button>
                            </div>
                            
                        </div>
                        <div className="col-md-4 mx-auto text-center p-2 m-2 border rounded" style={{ maxHeight: '400px' }}>
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Price Details</p>
                            <div className="card m-1">
                                <div className="card-body">
                                    <div className="row">
                                        <p className="card-text col-8"><span className="ml-6" style={{ float: 'left' }}>MRP: </span></p>
                                        <p className="card-text col-4"><span className="mr-6" style={{ float: 'right' }}>Rs. {getMrp()}</span></p>
                                    </div>
                                    <div className="row">
                                        <p className="card-text col-8"><span className="ml-6" style={{ float: 'left' }}>Product Discount: </span></p>
                                        <p className="card-text col-4"><span className="mr-6" style={{ float: 'right' }}>Rs. {getDiscount()}</span></p>
                                    </div>
                                    <div className="row">
                                        <p className="card-text col-8"><span className="ml-6" style={{ float: 'left' }}>Delivery Fee: </span></p>
                                        <p className="card-text col-4"><span className="mr-6" style={{ float: 'right' }}>{getTotalPrice() > 1000 ? <span className="text-success">Free</span> : 'Rs. 50'}</span></p>
                                    </div>

                                    <hr />
                                    <div className="row">
                                        <h5 className="card-text text-dark col-8"><span className="ml-6" style={{ float: 'left' }}>Total Price: </span></h5>
                                        <p className="card-text col-4"><span style={{ float: 'right' }}>Rs. {getTotalPrice()}</span></p>
                                    </div>

                                    <hr />
                                    <p className="card-text text-success"><span style={{ float: 'left' }}>You will save Rs. {getDiscount()} on the order.</span></p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Checkout;