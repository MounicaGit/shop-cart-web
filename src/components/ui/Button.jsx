export default function Button({ children, disabled, onClick }) {
    return (
        <button
            className="bg-blue-700 py-2 w-[100%] disabled:opacity-50 hover:bg-blue-400 rounded-md text-white mt-8"
            disabled={disabled}
            onClick={onClick}>
            {children}</button>
    )
}