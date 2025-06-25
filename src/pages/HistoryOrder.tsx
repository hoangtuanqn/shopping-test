import { useEffect } from "react";

import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../redux/middlewares/fetchOrders";
const HistoryOrder = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { orders } = useSelector((state: RootState) => state);
    useEffect(() => {
        if (orders.orders.length === 0) {
            dispatch(fetchOrders());
        }
    }, [dispatch, orders.orders.length]);
    if (orders.status === "failed") return <h1>Lấy dữ liệu thất bại</h1>;
    return (
        <div className="mt-10">
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
                    {orders.orders.map((order) => (
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
