import { useState } from "react";
import { deals } from "../services/deals"

export default function ProductDetailsTab() {
    const spec = {
        brand: "AudioTech",
        batteryLife: "30 hours",
        connectivity: "Bluetooth 5.0",
        weight: "250g",
    };

    return (
        <div>
            {
                [spec.entries].map(([key, value]) => {
                    <div className="flex flex-row gap-auto justify-space-between">
                        <p className="text-gray-500">{key}</p>
                        <p>{value}</p>
                        <hr />
                    </div>
                })
            }

        </div>
    )
}