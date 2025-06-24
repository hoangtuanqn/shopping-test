import * as yup from "yup";
export const orderSchema = yup.object({
    fullName: yup.string().required("Họ và tên không thể bỏ trống!"),
    address: yup.string().required("Địa chỉ không thể bỏ trống!"),
    phone: yup
        .string()
        .trim()
        .matches(/^[0-9+\-]{9,15}$/, "Số điện thoại không hợp lệ!")
        .required("Số điện thoại không thể bỏ trống!"),
    note: yup.string().trim().notRequired(),
});
export type OrderSchemaType = yup.InferType<typeof orderSchema>;
