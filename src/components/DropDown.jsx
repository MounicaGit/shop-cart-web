import { useState, useRef, useEffect, cloneElement } from 'react';

export default function DropDown({ trigger, children, align = "right" }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        function handleEscapeKey(event) {
            if (event.key == "Escape")
                setIsOpen(false)
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscapeKey)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        }
    }, [])

    return (
        <div className="relative" ref={dropDownRef}>
            {
                cloneElement(trigger, {
                    onClick: () => { setIsOpen(prev => !prev) },
                    className: `${trigger.props.className} right-0`
                })
            }
            {
                isOpen && (<div className={`absolute bg-white rounded-md shadow-lg mt-2 ${align == "right" ? "right-0" : "left-0"}`}>
                    {children}
                </div>)
            }
        </div>
    )
}