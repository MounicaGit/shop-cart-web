import { useOutletContext } from "react-router-dom";

export default function ProductReviewsTab() {
    const { reviews } = useOutletContext();

    return (
        reviews.length == 0 ?
            (<div className="w-[600px] flex flex-col justify-center items-center p-5">
                <img src="/icons/star_gray.png" className='h-[40px] w-[40px]' />
                <p className="text-sm text-gray-500">No reviews yet</p>

            </div>)
            : (
                <div className="">
                    {
                        reviews.map((item) => (
                            <div className=" py-2 border-b border-gray-200">
                                <div className="flex flex-row">
                                    <p className="text-sm text-gray-500 font-semi-bold">{item.name} </p>
                                    <div className="flex flex-row bg-gray-200 rounded-sm p-[1px] ml-2 justify-center items-center gap-1 px-1">
                                        <p className="text-black text-xs">5</p><img src="/icons/star_green.png" className=" h-[10px] w-[10px]" /></div> </div>
                                <p>{item.review}</p>
                            </div>
                        ))
                    }
                </div>
            )
    )
}