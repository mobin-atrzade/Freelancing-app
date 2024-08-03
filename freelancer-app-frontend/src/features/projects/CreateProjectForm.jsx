import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import { useState } from 'react';
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from './../../ui/Loading';
import useEditProject from "./useEditProject";


function CreateProjectForm({ onClose, projectToEdit = {} }) {

    const { _id: editId } = projectToEdit;
    const isEditSession = Boolean(editId);

    const { title, description, budget, deadline, category, tags: prevTags } = projectToEdit;

    let editValues = {};
    if (isEditSession) {
        editValues = {
            title,
            description,
            budget,
            category: category._id
        }
    }

    const { register, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues: editValues });
    const [tags, setTags] = useState(prevTags || []);
    const [date, setDate] = useState(new Date(deadline || ""));
    const { categories } = useCategories();
    const { isCreating, createProject } = useCreateProject();
    const { isEditing, editProject } = useEditProject();

    const onSubmit = (data) => {
        const newProject = {
            ...data,
            deadline: new Date(date).toISOString(),
            tags
        }

        if (isEditSession) {
            editProject({ id: editId, newProject }, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            });
        } else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            })
        }
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
                name="budget"
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
    )
}

export default CreateProjectForm;