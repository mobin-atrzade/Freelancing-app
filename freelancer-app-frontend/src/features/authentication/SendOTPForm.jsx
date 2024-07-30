import { useState } from "react";

function SendOTPForm() {

    const [phoneNumber, setPhoneNumber] = useState("");

    return <div>
        <form className="space-y-8 ">
            <div>
                <label className="mb-1" htmlFor="phonenumber">شماره موبایل</label>
                <input
                    className="textField__input"
                    type="text"
                    id="phonenumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <button className="btn btn--primary w-full">ارسال کد تایید</button>
        </form>
    </div>;
}

export default SendOTPForm;