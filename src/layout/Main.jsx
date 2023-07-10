import { Outlet } from "react-router-dom";
import Navabar from "../components/shared/navbar/Navabar";
import Footer from "../components/shared/footer/Footer";


const Main = () => {
    return (
        <div>
            <Navabar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;