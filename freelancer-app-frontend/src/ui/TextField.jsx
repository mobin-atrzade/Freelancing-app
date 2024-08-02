
function TextField({
    label,
    name,
    type = "text",
    register,
    required,
    validationSchema,
    errors
}) {
    return (
        <div>
            <label className="mb-2 block font-bold text-secondary-700" htmlFor={name}>
                {label} {required && <span className="text-error">*</span>}
            </label>
            <input
                className="textField__input"
                type={type}
                id={name}
                {...register(name, validationSchema)}
                autoComplete="off"
            />
            {errors && errors[name] && <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>}
        </div>
    )
}

export default TextField;