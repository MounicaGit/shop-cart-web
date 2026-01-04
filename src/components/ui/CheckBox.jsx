export default function CheckBox({ children, checked, onChange }) {
    return (
        <div className="flex justify-start items-center mt-2">
            <input
                type="checkbox"
                checked={checked}
                className="items-center"
                onChange={onChange} />
            {children}
        </div>
    )
}