import NavbarComp from "../../components/Navbar/NavbarComp";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="content">
            <NavbarComp />
            <div className="subcontent">
                <h1>React aplikace do předmětu 7VFAP</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Home;