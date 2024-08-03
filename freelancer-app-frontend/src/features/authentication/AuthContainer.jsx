import { useState } from "react";
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, getValues } = useForm();
    const { isPending: isSendingOtp, data: otpResponse, mutateAsync } = useMutation({
        mutationFn: getOtp,
    });

    const sendOtpHandler = async (data) => {
        try {
            const { message } = await mutateAsync(data);
            // console.log(data);
            toast.success(message);
            setStep(2);
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error);
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOTPForm
                    isSendingOtp={isSendingOtp}
                    onSubmit={handleSubmit(sendOtpHandler)}
                    setStep={setStep}
                    register={register}
                />;
            case 2:
                return <CheckOTPForm
                    phoneNumber={getValues("phoneNumber")}
                    onBack={() => setStep((s) => s - 1)}
                    onResendOtp={sendOtpHandler}
                    otpResponse={otpResponse}
                />;
            default:
                return null;
        }
    }

    return (
        <div className="w-full sm:max-w-sm">{renderStep()}</div>
    )
}

export default AuthContainer;