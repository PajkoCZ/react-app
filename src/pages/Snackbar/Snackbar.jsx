import NavbarComp from "../../components/Navbar/NavbarComp";
import Footer from "../../components/Footer/Footer";
import SnackbarComp from "../../components/Snackbar/SnackbarComp";

const Snackbar = (title) => {
    return(
        <div className="content">
            <NavbarComp />
            <SnackbarComp title={title}/>
            <Footer />
        </div>
    )
}

export default Snackbar;