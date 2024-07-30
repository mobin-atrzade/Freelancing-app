
function TextField({ label, name, value, onChange }) {
    return (
        <div>
            <label className="mb-2 block font-bold" htmlFor={name}>{label}</label>
            <input
                className="textField__input"
                type="text"
                id={name}
                value={value}
                name={name}
                onChange={onchange}
                autoComplete="off"
            />
        </div>
    )
}

export default TextField;