import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
    const { isdarkMode, toggleDarkMode } = useDarkMode();
    return (
        <button onClick={toggleDarkMode}>
            {isdarkMode ? (
                <HiOutlineSun className="w-5 h-5 text-primary-900" />
            ) : (
                <HiOutlineMoon className="w-5 h-5 text-primary-900" />
            )}
        </button>
    )
}

export default DarkModeToggle;