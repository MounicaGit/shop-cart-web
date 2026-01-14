export default function TextAreaField({ rows = 1, type, placeholder, value, onChange, maxLines = 1, onBlur, className = "h-[40px] rounded-md border border-gray-200 pl-2 h-[40px] mt-2" }) {
    return (
        <textarea
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            max={maxLines}
            className={className}
        />
    )
}