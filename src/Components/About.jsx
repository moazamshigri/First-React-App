import "./About.css";
function About (){
    return (
       <>
       <div className="about">
           
           <div>
            <h1 className="text-#ffdf20-300 italic">
            ABOUT OUR FIT <br /> FAMILY
            </h1>
            <p>
            Astraeus was founded in 2001 by a <br /> husband and wife team, Bobby and Dora <br /> Graff. Since then, we have expanded to <br /> over 115 locations nationwide!
            </p>
            <a href="#">Learn More</a>


           </div>
           <div className="about-img">
            <div className="img1">

           <img  src="./src/images/img1.png" alt="" />
            </div>
            <div className="img2">

           <img  src="./src/images/img2.png" alt="" />
            </div>
           </div>
             </div>
             <hr />
             </>
    );
}
export default About;