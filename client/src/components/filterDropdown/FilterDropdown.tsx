type FilterDropdownProps = {
    label: string;
    options: string[];
    onChange: (value: string) => void;
};

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, onChange }) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">{label}</label>
            <select
                onChange={(e) => onChange(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterDropdown;