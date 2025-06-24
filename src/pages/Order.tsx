import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema, OrderSchemaType } from "../schemas/orderSchema";
import { ProductType } from "../interfaces/ProductType";

const Order = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(orderSchema),
    });

    const onSubmit = async (data: OrderSchemaType) => {
        try {
            await axios.post("http://localhost:8000/orders", {
                id_product: +id,
                ...data,
            });
            alert("Đã đặt hành thành công");
            navigate("/orders");
        } catch (error) {
            alert("Đã xảy ra lỗi trong quá trình đặt hàng, vui lòng thử lại");
        }
    };

    useEffect(() => {
        const getProduct = async () => {
            if (!id) {
                navigate("/");
            }
            try {
                const res = await axios.get(`http://localhost:8000/products/${id}`);
                setProduct(res.data as ProductType);
            } catch (error) {
                console.log("Failed fetch API get detail product >> ", error);
                navigate("/");
            }
        };
        getProduct();
    }, []);

    return (
        <div>
            <h1 className="text-center text-xl font-bold">
                Product: <span className="text-blue-500">{product?.name}</span>
            </h1>

            <form className="mx-auto mt-10 max-w-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="text"
                        {...register("fullName")}
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                        placeholder=" "
                    />
                    <label
                        htmlFor="fullName"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                        Họ và Tên (*)
                    </label>
                    <i className="text-[10px] font-medium text-red-600">{errors.fullName?.message}</i>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="text"
                        {...register("address")}
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                        placeholder=" "
                    />
                    <label
                        htmlFor="address"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                        Địa chỉ (*)
                    </label>
                    <i className="text-[10px] font-medium text-red-600">{errors.address?.message}</i>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                        placeholder=" "
                    />
                    <label
                        htmlFor="phone"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                        Số điện thoại (*)
                    </label>
                    <i className="text-[10px] font-medium text-red-600">{errors.phone?.message}</i>
                </div>

                <div className="group relative z-0 mb-5 w-full">
                    <textarea
                        {...register("note")}
                        id="note"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                        placeholder=" "
                    />
                    <label
                        htmlFor="note"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                    >
                        Ghi chú (Nếu có)
                    </label>
                    <i className="text-[10px] font-medium text-red-600">{errors.note?.message}</i>
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Đặt hàng
                </button>
            </form>
        </div>
    );
};

export default Order;
