import { NavLink, useParams } from "react-router-dom";

export default function RouterTabs({ tabs, className, basePath }) {
    const { id } = useParams();

    return (
        <div className={` ${className || "w-full"}`}>
            <nav className="flex border-b border-gray-200 justify-evenly w-[600px]">
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.path}
                        to={`${basePath}/${tab.path}`}
                        className={({ isActive }) =>
                            `flex-1 text-center py-2 ${isActive
                                ? "border-b-2 border-blue-700 font-semibold"
                                : "border-b-2 border-transparent"
                            }`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
