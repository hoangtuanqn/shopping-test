import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../interfaces/ProductType";

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8000/products");
                setProducts(res.data as ProductType[]);
            } catch (error) {
                console.log("Failed fetch API get Products >> ", error);
            }
        };
        getProducts();
    }, []);
    return (
        <>
            <h1 className="text-center text-2xl font-bold text-red-700">Danh sách sản phẩm</h1>
            <div className="mt-8 grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col justify-center overflow-auto rounded-2xl border p-4">
                        <img src={product.thumbnail} alt={product.name} className="w-full rounded-2xl object-cover" />
                        <h2 className="text-md mt-4 line-clamp-2 text-center font-bold">{product.name}</h2>
                        <p className="mt-4 line-clamp-3 text-center text-[12px]">{product.description}</p>
                        <Link
                            to={`/order/${product.id}`}
                            className="mt-4 cursor-pointer rounded-2xl bg-blue-400 px-6 py-2 text-center font-bold text-white"
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
