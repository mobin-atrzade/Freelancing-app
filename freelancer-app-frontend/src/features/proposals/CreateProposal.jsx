import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { isCreating, createProposal } = useCreateProposal();

    const onSubmit = (data) => {
        createProposal({ ...data, projectId }, {
            onSuccess: () => onClose()
        })
    }

    return (
        <div>
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="توضیحات"
                    name="description"
                    register={register}
                    required
                    validationSchema={{
                        required: "توضیحات ضروری هست",
                        minLength: {
                            vallue: 10,
                            message: "حداقل 10 کاراکتر وارد کنید"
                        }
                    }}
                    errors={errors}
                />
                <TextField
                    label="قیمت"
                    name="price"
                    type="number"
                    register={register}
                    required
                    validationSchema={{
                        required: "قیمت ضروری هست"
                    }}
                    errors={errors}
                />
                <TextField
                    label="مدت زمان"
                    name="duration"
                    type="number"
                    register={register}
                    required
                    validationSchema={{
                        required: "مدت زمان ضروری هست"
                    }}
                    errors={errors}
                />
                {isCreating ? (
                    <Loading />
                ) : (
                    <button
                        type="submit"
                        className="btn btn--primary w-full"
                    >
                        تایید
                    </button>
                )}
            </form>
        </div>
    )
}

export default CreateProposal;