import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from "../../services/authService";
import { toast } from 'react-hot-toast';
import Loading from './../../ui/Loading';
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const { mutateAsync, isPending } = useMutation({
        mutationFn: completeProfile
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user, message } = await mutateAsync({ name, email, role });
            toast.success(message);

            if (user.status !== 2) {
                navigate("/");
                toast("پروفایل شما در انتظار تایید است", {
                    icon: '👏'
                });
                return;
            }
            if (user.role === "OWNER") return navigate("/owner");
            if (user.role === "FREELANCER") return navigate("/FREELANCER");

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="flex justify-center pt-10">
            <div className="w-full sm:max-w-sm">
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <TextField
                        label="نام و نام خانوادگی"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                    />
                    <TextField
                        label="ایمیل"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    <div className="flex items-center justify-center gap-x-8">
                        <RadioInput
                            label="کارفرما"
                            value="OWNER"
                            onChange={(e) => setRole(e.target.value)}
                            name="role"
                            id="OWNER"
                            checked={role === "OWNER"}
                        />
                        <RadioInput
                            label="فریلنسر"
                            value="FREELANCER"
                            onChange={(e) => setRole(e.target.value)}
                            name="role"
                            id="FREELANCER"
                            checked={role === "FREELANCER"}
                        />
                    </div>
                    <div>
                        {isPending ? (
                            <Loading />
                        ) : (
                            <button
                                type="submit"
                                className="btn btn--primary w-full"
                            >
                                تایید
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompleteProfileForm;