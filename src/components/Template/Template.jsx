import "./template.css"

import { Outlet } from "react-router-dom";

import NavbarComp from "../Navbar/NavbarComp";
import Footer from "../Footer/Footer";


const Template = (props) => {






    return (
        <div className="template">
            <NavbarComp />
            <div className="content pt-5 px-4">
                <h1>Home</h1>



                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Template;