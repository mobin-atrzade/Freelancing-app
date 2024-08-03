import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ isSendingOtp, onSubmit, register }) {


    return <div>
        <form className="space-y-10" onSubmit={onSubmit}>
            <TextField
                label="شماره موبایل"
                type="number"
                name="phoneNumber"
                register={register}
                validationSchema={{
                    required: "شماره تماس ضروری است",
                    minLength: {
                        vallue: 11,
                        message: "شماره تماس معتبر نمی باشد"
                    }
                }}
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