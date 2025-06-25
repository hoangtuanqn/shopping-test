import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/heplers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/middlewares/fetchProducts";
import { AppDispatch, RootState } from "../redux/store";

const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products } = useSelector((state: RootState) => state);
    useEffect(() => {
        if (products.products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.products.length]);
    if (products.status === "failed") return <h1>Lấy dữ liệu thất bại</h1>;
    return (
        <>
            <h1 className="mt-10 text-center text-2xl font-bold text-red-700">Danh sách sản phẩm</h1>
            <div className="mt-8 grid grid-cols-3 gap-4">
                {products.products.map((product) => (
                    <div key={product.id} className="flex flex-col justify-center overflow-auto rounded-2xl border p-4">
                        <img src={product.thumbnail} alt={product.name} className="w-full rounded-2xl object-cover" />
                        <h2 className="text-md mt-4 line-clamp-2 text-center font-bold">{product.name}</h2>
                        <p className="mt-4 line-clamp-3 text-center text-[12px]">{product.description}</p>
                        <p className="text-md mt-4 text-center font-semibold text-green-400">
                            {formatCurrency(product.price)}đ
                        </p>
                        <p className="mt-2 text-center text-sm">Còn: {formatCurrency(product.stock)} sản phẩm</p>
                        <Link
                            to={`/order/${product.id}`}
                            className="mt-6 cursor-pointer rounded-2xl bg-blue-400 px-6 py-2 text-center font-bold text-white"
                        >
                            Mua ngay
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
