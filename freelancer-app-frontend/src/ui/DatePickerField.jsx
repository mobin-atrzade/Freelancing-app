import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";



function DatePickerField({ label, date, setDate }) {
    return (
        <div className="mb-4">
            <span className="mb-2 block text-secondary-700">{label}</span>
            <DatePicker
                containerClassName="w-full"
                inputClass="textField__input"
                calendarPosition="bottom-center"
                value={date}
                onChange={(date) => setDate(date)}
                format="YYYY/MM/DD"
                calendar={persian}
                locale={persian_fa}
            />
        </div>
    )
}

export default DatePickerField;