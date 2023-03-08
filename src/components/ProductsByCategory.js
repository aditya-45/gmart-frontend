import CategoryService from "../services/category.service";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/style.css';
import '../css/bootstrap.min.css';

const ProductsByCategory = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("ascending");


  useEffect(() => {
    console.log("in category use effect");
    CategoryService.getCategories(categoryName).then((response) => {
      setProduct(response.data);
      setSortedProducts(response.data);
    });
  }, []);



  const handleClick = () => {
    navigate("/login/retailer", { state: { from: "homeBuyNow" } });
  };

  const calculatePrice = (price, discount) => {
    console.log(price)
    return Number.parseFloat(price) - (Number.parseFloat(price) * (Number.parseFloat(discount) / 100));
  }

  const handleSortByName = () => {
    const newSortingOrder = sortingOrder === "ascending" ? "descending" : "ascending";
    const sorted = sortedProducts.sort((a, b) => {
      if (sortingOrder === "ascending") {
        return a.productName.localeCompare(b.productName);
      } else {
        return b.productName.localeCompare(a.productName);
      }
    });
    setSortingOrder(newSortingOrder);
    setSortedProducts(sorted);
  };

  const handleSortByCompany = () => {
    const newSortingOrder = sortingOrder === "ascending" ? "descending" : "ascending";
    const sorted = sortedProducts.sort((a, b) => {
      if (sortingOrder === "ascending") {
        return a.company.companyName.localeCompare(b.company.companyName);
      } else {
        return b.company.companyName.localeCompare(a.company.companyName);
      }
    });
    setSortingOrder(newSortingOrder);
    setSortedProducts(sorted);
  };

  const handleSortByPrice = () => {
    const newSortingOrder = sortingOrder === "ascending" ? "descending" : "ascending";
    const sorted = sortedProducts.sort((a, b) => {
      if (sortingOrder === "ascending") {
        return a.mrp - b.mrp;
      } else {
        return b.mrp - a.mrp;
      }
    });
    setSortingOrder(newSortingOrder);
    setSortedProducts(sorted);
  };


  const handleSortByDiscount = () => {
    const newSortingOrder = sortingOrder === "ascending" ? "descending" : "ascending";
    const sorted = sortedProducts.sort((a, b) => {
      if (sortingOrder === "ascending") {
        return a.discount - b.discount;
      } else {
        return b.discount - a.discount;
      }
    });
    setSortingOrder(newSortingOrder);
    setSortedProducts(sorted);
  };

  const renderProducts = sortedProducts.map(product =>
    <div key={product.id} className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..\..\images\grocery.jpg" className="img-fluid rounded-start" alt="Product Image" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <div className="row">
              <div className="col-md-5">
                <p className="card-text"><span className="badge text-bg-secondary">Price: <span className="text-warning">{calculatePrice(product.mrp, product.discount)}</span> <span className="text-info" style={{ textDecoration: 'line-through' }}>{product.mrp}</span></span> </p>
                <p className="card-text"><span className="badge text-bg-secondary">Discount: <span className="text-warning">{product.discount}</span></span> </p>
                <p className="card-text"><span className="badge text-bg-secondary">Company: <span className="text-warning">{product.company.companyName}</span></span> </p>

              </div>
              <div className="col-md-6">
                  <div className="card-text">
                      {product.description}
                      <br/>
                      had fihafaofo aifoasfoaisf
                      asjhasfasfoasfoasfapofasf
                      ajhfshfasfoasfpaifpaifaf
                      ashfjahsflashfaasjfoasfoaf
                      asjflksjaljflkasjfkajlkfkjaf
                      ahfasfoafalfjiajjojihg
                  </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <button onClick={handleClick} className="btn btn-outline-dark col-md-3  mx-auto">Buy Now</button>
              <button className="btn btn-outline-info col-md-3  mx-auto">Product Details</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Product List</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <h5>Sort By</h5>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-link text-dark" onClick={handleSortByName}>Product Name</button>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-link text-dark" onClick={handleSortByPrice}>Price</button>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-link text-dark" onClick={handleSortByDiscount} >Discount</button>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-link text-dark" onClick={handleSortByCompany} >Company Name</button>
          </div>
        </div>
      </div>
      <div className="container">
        {renderProducts}
      </div>

      <Footer />
    </div>
  );
}

export default ProductsByCategory;