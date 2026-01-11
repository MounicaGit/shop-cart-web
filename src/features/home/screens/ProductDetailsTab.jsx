import { useState } from "react";
import { useOutletContext } from "react-router";

export default function ProductDetailsTab() {
    const { details } = useOutletContext();

    return (
        <div>
            <p className="p-3 text-sm">{details}</p>
        </div>
    )
}