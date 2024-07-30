import { useState } from "react";
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("09114456502");
    const { isPending: isSendingOtp, error, data, mutateAsync } = useMutation({
        mutationFn: getOtp,
    });

    const sendOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await mutateAsync({ phoneNumber });
            console.log(data);
            toast.success(data.message);
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
                    onSubmit={sendOtpHandler}
                    setStep={setStep}
                    phoneNumber={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />;
            case 2:
                return <CheckOTPForm
                    phoneNumber={phoneNumber}
                    onBack={() => setStep((s) => s - 1)}
                    onResendOtp={sendOtpHandler}
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