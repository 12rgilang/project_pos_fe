import Menu from "../../components/menu/menu";

function Home(){
    return(
        <>
        <div className="main flex h-screen">
            <div className="left flex flex-col justify-evenly items-center border-r-2 w-1/12 cursor-pointer">
                <div className="home">
                    Home
                </div>
                <div className="payment">
                    Payment
                </div>
                <div className="orders">
                Orders
                </div>
                <div className="admin">
                Admin 
                </div>
            </div>
            <div className="middle w-8/12 border-r-2">
                <Menu />
            </div>
            <div className="right w-3/12">
                tes
            </div>
        </div>
        </>
    )
}

export default Home;