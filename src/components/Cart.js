import { useState, useContext } from "react";
import { CartContext } from './UserContext';
import Header from "./Header";

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);

    // const [cartItems, setCartItems] = useState([{ id: 1, productName: "p1", mrp: 300, discount: 10, company: { companyName: "company" } },
    // { id: 2, productName: "p2", mrp: 500, discount: 5, company: { companyName: "test" } },
    // { id: 3, productName: "p3", mrp: 200, discount: 15, company: { companyName: "company" } }]);

    const calculatePrice = (price, discount) => {
        console.log(price)
        return Number.parseFloat(price) - (Number.parseFloat(price) * (Number.parseFloat(discount) / 100));
    }

    const incrementQuantity = (product) => {
        const newCart = [...cart];
        const index = newCart.findIndex((item) => item.product.id === product.id);
        newCart[index].quantity += 1;
        sessionStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
      };
    
      const decrementQuantity = (product) => {
        const newCart = [...cart];
        const index = newCart.findIndex((item) => item.product.id === product.id);
        if(newCart[index].quantity > 0){
          newCart[index].quantity -= 1;
        }
        if(newCart[index].quantity === 0){
          newCart.splice(index, 1);
        }
        
        sessionStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
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
                    <h1 className="mx-auto">Cart</h1>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 mx-auto p-2 m-2 border rounded">
                            <div className="text-center">
                                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Product List</p>
                            </div>
                            {/* {temp} */}
                             {cart.map((cartItem) =>
                                <div key={cartItem.product.id} className="card">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="..\..\images\grocery.jpg" className="img-fluid h-100 rounded-start" alt="Product Image" />
                                        </div>
                                        <div className="card-body col-md-7">
                                            <h5 className="card-title">{cartItem.product.productName}</h5>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <p className="card-text"><span className="badge text-bg-light">Price: <span className="text-success">{calculatePrice(cartItem.product.mrp, cartItem.product.discount)}</span> <span className="text-info" style={{ textDecoration: 'line-through' }}>{cartItem.product.mrp}</span></span> </p>
                                                    <p className="card-text"><span className="badge text-bg-light">Company: <span className="text-warning">{cartItem.product.company.companyName}</span></span> </p>

                                                </div>
                                                <div className="container col-md-5">
                                                    <div className="row">
                                                        <p className="col-5">Quantity</p>
                                                        <button className="btn btn-danger col-2 h-25 border rounded" onClick={()=>decrementQuantity(cartItem.product)}>-</button>

                                                        <div className="col-3 text-center">
                                                            <span>{cartItem.quantity}</span>
                                                        </div>

                                                        <button className="btn btn-success h-25 col-2" onClick={()=>incrementQuantity(cartItem.product)}>+</button>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )} 
                        </div>
                        <div className="col-md-4 mx-auto text-center p-2 m-2 border rounded" style={{maxHeight:'400px'}}>
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Price Details</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Cart;