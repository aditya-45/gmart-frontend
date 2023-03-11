import Footer from "./Footer";
import Header from "./Header";
import HomeCardComponent from "./HomeCardComponent";
import HomeCarousel from "./HomeCarousel";
import CategoryList from "./CategoryList";

const RetailerHomePage = () => {
    return (
        <div>
            <Header/>
            <HomeCarousel/>
            <br/>
            <br/>
            <br/>
            <CategoryList />
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            className="bi bi-arrow-up"></i></a>
            <Footer/>
        </div>
        
    );
}

export default RetailerHomePage;