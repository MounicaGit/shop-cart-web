import { useState } from "react";
import { deals } from "../services/deals"

export default function ProductSpecificationsTab() {
    const spec = {
        brand: "AudioTech",
        batteryLife: "30 hours",
        connectivity: "Bluetooth 5.0",
        weight: "250g",
    };

    return (
        <div className="w-[600px] pt-2">
            {
                Object.entries(spec).map(([key, value]) => {
                    return (<div className="flex flex-row justify-between items-center py-2 border-b border-gray-200">
                        <p className="text-sm text-gray-500">{key[0].toUpperCase()+key.substring(1)}</p>
                        <p className="text-sm text-right">{value}</p>
                    </div>)
                })
            }
        </div>
    )
}