import Footer from "./Footer";
import Header from "./Header";
import HomeCardComponent from "./HomeCardComponent";
import HomeCarousel from "./HomeCarousel";
import HomeCategory from "./HomeCategory";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HomeCarousel/>
            <HomeCardComponent/>
            <br/>
            <br/>
            <br/>
            <HomeCategory/>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            className="bi bi-arrow-up"></i></a>
            <Footer/>
        </div>
        
    );
}

export default HomePage;