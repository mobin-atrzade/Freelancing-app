import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import { useState } from 'react';
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";


function CreateProjectForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [tags, setTags] = useState([]);
    const [date, setDate] = useState(new Date());
    const { categories } = useCategories();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="عنوان پروژه"
                name="title"
                register={register}
                required
                validationSchema={{
                    required: "عنوان ضروری هست",
                    minLength: {
                        vallue: 6,
                        message: "حداقل 6 کاراکتر وارد کنید"
                    }
                }}
                errors={errors}
            />
            <TextField
                label="توضیحات"
                name="description"
                register={register}
                required
                validationSchema={{
                    required: "توضیحات ضروری هست",
                    minLength: {
                        vallue: 15,
                        message: "حداقل 15 کاراکتر وارد کنید"
                    }
                }}
                errors={errors}
            />
            <TextField
                label="بودجه"
                name="price"
                type="number"
                register={register}
                required
                validationSchema={{
                    required: "بودجه ضروری هست",
                }}
                errors={errors}
            />
            <RHFSelect
                label="دسته بندی"
                name="category"
                required
                register={register}
                options={categories}
            />
            <div>
                <label className="mb-2 block text-secondary-700">تگ</label>
                <TagsInput
                    value={tags}
                    onChange={setTags}
                    name="tags"
                // classNames={ }
                />
            </div>
            <DatePickerField
                label="ددلاین"
                date={date}
                setDate={setDate}
            />
            <button
                type="submit"
                className="btn btn--primary w-full"
            >
                تایید
            </button>
        </form>
    )
}

export default CreateProjectForm;