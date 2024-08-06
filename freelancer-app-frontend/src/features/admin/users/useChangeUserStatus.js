import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authService";

export default function useChangeUserStatus() {
    const { mutate: changeUserStatus, isPending: isUpdating } = useMutation({
        mutationFn: changeUserStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message);
        }
    })

    return { changeUserStatus, isUpdating };
}