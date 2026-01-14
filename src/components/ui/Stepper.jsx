export default function Stepper({ label, image, isActive, order, isLast }) {
    return (
        <div className="mt-6 flex items-center justify-between max-w-3xl mx-auto">
            <Step label="Address" active />
            <Divider />
            <Step label="Payment" />
            <Divider />
            <Step label="Review" />
        </div>
    )
}