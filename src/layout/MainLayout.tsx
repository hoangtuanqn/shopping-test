import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div className="mx-auto w-7xl max-w-full p-20 pt-10">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
