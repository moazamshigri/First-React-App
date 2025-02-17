import "./Home.css"
function Home() {
    return (

        <div className="home flex text-white ">
            <div className="navbar">
                <div className="logo flex justify-between items-center"><img src="./src/images/logo.png" alt="" />ASTRAEUS GYM</div>
            </div>
            <div className="main">
               <h3 > Be Your <b className="text-#ffdf20-300">Best</b></h3>
               <button className="join-button">Join Today</button>
            </div>
        </div>
    );

}

export default Home