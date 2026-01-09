import ProfileMenu from "./ProfileMenu";

export default function HeaderBar() {
    return (
        <div
            className="flex flex-row bg-blue-700 p-5 justify-start items-center h-[80px] w-[100%] relative">
            <div className="flex flex-row">
                <h1 className="text-xl font-semibold text-white pt-2">ShopMart</h1>
                <div className="relative w-[100%]">
                    <input
                        type="text"
                        className="h-[40px] rounded-sm border ml-5 w-[400px] pl-10"
                        placeholder="Search for Products, Brands and More.."

                    />
                    <img src="/icons/search.png" className="h-4 w-4 absolute bottom-3 left-8" />
                </div>
            </div>
            <div className="flex gap-5 ml-auto mr-10">
                <ProfileMenu />
                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/cart.png" className="h-5 w-5 " />
                    <p className="text-white">Cart</p>
                </div>
            </div>
        </div >
    )
}