
function TextField({ label, name, value, number, onChange }) {
    return (
        <div>
            <label className="mb-2 block font-bold" htmlFor={name}>{label}</label>
            <input
                className="textField__input"
                type={number}
                id={name}
                value={value}
                name={name}
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    )
}

export default TextField;