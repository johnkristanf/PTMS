 
interface DropdownProps<T> {
    options: T[];
    optionFormatter: (option: T) => string;
}

export const DropdownDate = <T,>({ options, optionFormatter }: DropdownProps<T>) => (
    <div>
        <select className="bg-gray-500 text-white p-2 rounded-md focus:outline-none">
            {options.map((option, index) => (
                    <option key={index} value={String(option)}>
                        {optionFormatter(option)}
                    </option>
            ))}
        </select>
    </div>
);


