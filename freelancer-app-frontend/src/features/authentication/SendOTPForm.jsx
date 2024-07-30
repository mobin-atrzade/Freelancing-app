import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: getOtp,
    });

    const sendOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await mutateAsync({ phoneNumber });
            console.log(data);
            toast.success(data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error);
        }
    }

    return <div>
        <form className="space-y-10" onSubmit={sendOtpHandler}>
            <TextField
                label="شماره تماس"
                type="number"
                name="phonenumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                {isPending ? (
                    <Loading />
                ) : (
                    <button
                        type="submit"
                        className="btn btn--primary w-full"
                    >
                        ارسال کد تایید
                    </button>
                )}
            </div>
        </form>
    </div>;
}

export default SendOTPForm;