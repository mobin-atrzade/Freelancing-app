import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";


const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp }) {
    const [otp, setOtp] = useState("");
    const [time, setTime] = useState(RESEND_TIME);
    const navigate = useNavigate();
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: checkOtp
    });

    const checkOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const { message, user } = await mutateAsync({ phoneNumber, otp });
            toast.success(message);
            if (user.isActive) {
                // push to panel based on role
                // if(user.role === "OWNER") navigate("/owner");
                // if(user.role === "FREELANCER") navigate("/freelancer");
            } else {
                navigate("/complete-profile");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

        return () => {
            if (timer) clearInterval(timer);
        }
    }, [time])

    return <div>
        <button onClick={onBack}>
            <HiArrowRight className="w-6 h-6 text-secondary-600" />
        </button>
        <div className="mb-4 text-secondary-500">
            {time > 0 ? (
                <p>{time} ثانیه تا ارسال مجدد کد</p>
            ) : (
                <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
            )}
        </div>
        <form className="space-y-10" onSubmit={checkOtpHandler}>
            <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
            <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input type="number" {...props} />}
                containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                inputStyle={{
                    width: "2.5rem",
                    padding: "0.5rem 0.2rem",
                    border: "1px solid rgb(var(--color-primary-400))",
                    borderRadius: "0.5rem"
                }}
            />
            <button className="btn btn--primary w-full">تایید</button>
        </form>
    </div>;
}

export default CheckOTPForm;