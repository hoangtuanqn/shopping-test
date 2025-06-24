import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/order/:id" element={<Order />} />
            </Route>
        </Routes>
    );
}

export default App;
