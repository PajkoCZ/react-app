import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Toto je home</h1>
            <Outlet />
        </div>
    )
}

export default Home;