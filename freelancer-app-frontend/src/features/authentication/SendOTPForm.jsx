import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ isSendingOtp, phoneNumber, onChange, onSubmit }) {


    return <div>
        <form className="space-y-10" onSubmit={onSubmit}>
            <TextField
                label="شماره تماس"
                type="number"
                name="phonenumber"
                value={phoneNumber}
                onChange={onChange}
            />
            <div>
                {isSendingOtp ? (
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