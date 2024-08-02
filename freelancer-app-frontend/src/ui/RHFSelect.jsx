
function RHFSelect({ label, name, register, options, required }) {
    return <div>
        <label
            className="mb-2 block text-secondary-700"
            htmlFor={name}>
            {label} {required && <span className="text-error">*</span>}
        </label>
        <select {...register(name)} id={name} className="textField__input">
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    </div>;
}

export default RHFSelect;