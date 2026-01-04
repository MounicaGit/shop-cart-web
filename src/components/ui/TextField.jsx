export default function TextField({ type, placeholder, value, onChange, onBlur }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="h-[40xpx] rounded-md border border-gray-200 pl-2 h-[40px] mt-2"
        />
    )
}