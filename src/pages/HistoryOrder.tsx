import React, { useEffect, useState } from "react";

import { OrderSchemaType } from "../schemas/orderSchema";
import axios from "axios";
const HistoryOrder = () => {
    const [orders, setOrders] = useState<OrderSchemaType[]>();
    useEffect(() => {
        const getHistories = async () => {
            try {
                const res = await axios.get("http://localhost:8000/orders");
                setOrders(res.data as OrderSchemaType[]);
                console.log(res.data);
            } catch (error) {
                console.log("Failed fetch API get Histories Order >> ", error);
            }
        };
        getHistories();
    }, []);
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Họ và tên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Địa chỉ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Số ĐT
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Note
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order) => (
                        <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                            >
                                {order.fullName}
                            </th>
                            <td className="px-6 py-4">{order.address}</td>
                            <td className="px-6 py-4">{order.phone}</td>
                            <td className="px-6 py-4">{order.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryOrder;
