import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    function handleClick(value) {
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }

    return (
        <div className="flex items-center gap-x-2 text-xs ">
            <span>وضعیت</span>
            <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
                {
                    options.map((item) => {
                        const isActive = item.value === currentFilter;
                        return (
                            <button
                                key={item.value}
                                disabled={isActive}
                                onClick={() => handleClick(item.value)}
                                className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-200
                                ${isActive
                                        ? "!bg-primary-900 text-white"
                                        : "bg-secondary-0 text-secondary-800"
                                    }
                                `}
                            >
                                {item.label}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filter;