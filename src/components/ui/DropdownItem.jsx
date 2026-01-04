export default function DropdownItem({ children, onClick, danger = false }) {
    return (
        <div
            onClick={onClick}
            className={`px-5 py-3 ${danger ? "text-red-500" : "text-black-500"}`}>
            {children}
        </div>
    )
}