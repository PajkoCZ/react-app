import NavbarComp from "../../components/Navbar/NavbarComp";
import Footer from "../../components/Footer/Footer";
import UsersComp from "../../components/TableComp/UsersComp";

const Users = () => {
    return(
        <div className="content">
            <NavbarComp />
            <UsersComp />
            <Footer />
        </div>
    )
}

export default Users;