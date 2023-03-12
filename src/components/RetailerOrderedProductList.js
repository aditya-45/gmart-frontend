// import React from 'react';
// import RetailerHeader from './RetailerHeader';
// import Footer from './Footer';

// function RetailerOrderedProductList() {
    
//   return (
//     <div>
//         <RetailerHeader />
//         <div className="container">
//             <h2 className="my-4">Ordered Products</h2>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Product Name</th>
//                         <th>Order Date</th>
//                         <th>Details</th>
//                         <th>Track</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Product 1</td>
//                         <td>2023-03-01</td>
//                         <td><button className="btn btn-primary">Details</button></td>
//                         <td><button className="btn btn-primary">Track</button></td>
//                         <td>Shipped</td>
//                     </tr>
//                     <tr>
//                         <td>Product 2</td>
//                         <td>2023-03-02</td>
//                         <td><button className="btn btn-primary">Details</button></td>
//                         <td><button className="btn btn-primary">Track</button></td>
//                         <td>In Transit</td>
//                     </tr>
//                     <tr>
//                         <td>Product 3</td>
//                         <td>2023-03-03</td>
//                         <td><button className="btn btn-primary">Details</button></td>
//                         <td><button className="btn btn-primary">Track</button></td>
//                         <td>Delivered</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//         <Footer />
//     </div>
//   );
// }

// export default RetailerOrderedProductList;

import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import RetailerService from '../services/retailer.service';
import Header from './Header';

function OrderedProductsList() {
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    // Fetch ordered products data from database here
    RetailerService.getOrders().then((response) => {
      setOrderedProducts(response.data);
  }).catch(error => {
      console.log(error);
    
  });
  }, []);

  return (
    <div>
      <Header />
      <br/>
      <br/>
      <br/>
      <div className="container">
        <h2 className="my-4">My Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Ordered Items</th>
              <th>Order Date</th>
              <th>Details</th>
              <th>Track</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderedProducts.map(order => (
              <tr key={order.id}>
                <td className='text-truncate'>{order.products.map(product => (<span key={product.id}>{product.productName} </span>))}</td>
                <td>{order.orderDate}</td>
                <td><button className="btn btn-primary">Details</button></td>
                <td><button className="btn btn-primary">Track</button></td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default OrderedProductsList;
