import { NavLink } from "react-router-dom";

const Header = () => {
    console.log("render -header");

    return (
        <>
            <NavLink to="/" className={`mr-4 rounded-2xl border px-4 py-2 text-blue-500`}>
                Trang chủ
            </NavLink>
            <NavLink to="/orders" className="mr-4 rounded-2xl border px-4 py-2 text-blue-500">
                Lịch sử đặt hàng
            </NavLink>
        </>
    );
};

export default Header;
