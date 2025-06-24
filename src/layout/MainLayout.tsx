import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="mx-auto w-7xl p-20 pt-10">
            <Outlet />
        </div>
    );
};

export default MainLayout;
