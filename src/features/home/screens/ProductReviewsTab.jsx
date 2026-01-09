import StarIcon from '/icons/star.png'

export default function ProductReviewsTab() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <img src={StarIcon} className='h-10 w-10' />
                <p className="text-md text-gray-500">No reviews yet</p>
            </div>
        </div>
    )
}