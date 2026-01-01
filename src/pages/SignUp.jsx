export default function SignUp() {

    function renderHeader() {
        return (
            <div>
                <h1>ShopMart</h1>
                <h3>Welcome back!! Signupjn to cossfhntinue</h3>
            </div>
        );
    }

    function renderCard() {
        return (
            <div className="bg-green w-[400] h-[300] p-10 "><h5>Sign In</h5></div>
        )
    }
    return (
        <div className="flex justify-center items-center bg-pink-500">{renderHeader()}
            {renderCard()}   </div>
    );
}