import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <button className="btn btn--primary w-full">تایید</button>
                </form>
            </div>
        </div>
    )
}

export default CompleteProfileForm;