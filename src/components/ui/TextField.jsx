import { maxLength } from "zod";

export default function TextField({ type, placeholder, value, onChange, maxLines = 1, onBlur, maxLength=99999, className = "h-[40px] rounded-md border border-gray-200 pl-2 h-[40px] mt-2" }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={onChange}
            onBlur={onBlur}
            max={maxLines}
            className={className}
        />
    )
}