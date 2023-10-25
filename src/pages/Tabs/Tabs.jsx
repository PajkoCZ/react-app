import NavbarComp from "../../components/Navbar/NavbarComp";
import Footer from "../../components/Footer/Footer";
import TabsComp from "../../components/Tabs/TabsComp";

const Tabs = ({title}) => {
    return(
        <div className="content">
            <NavbarComp />
            <TabsComp heading={title}/>
            <Footer />

        </div>
    )
}

export default Tabs;