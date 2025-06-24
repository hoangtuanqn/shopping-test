import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import HistoryOrder from "./pages/HistoryOrder";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/order/:id" element={<Order />} />
                <Route path="/orders" element={<HistoryOrder />} />
            </Route>
        </Routes>
    );
}

export default App;
