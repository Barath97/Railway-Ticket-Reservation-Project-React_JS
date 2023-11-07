import React  from "react";
import videoBG from '../video/MREX.mp4';
import "./Main.css";
import HOI from '../image/HOI.png';
import IP from '../image/IP.png';
import IS from '../image/IS.png';
import E3 from '../image/Exterior3.png';
import E4 from '../image/Exterior4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain ,faCheck } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';



const Main=()=>{
    return(
        <>  
            <div className="main">
                <video src={videoBG} autoPlay controls preload="auto" loop />
            </div>
            <h1 className="ME-journy">MAHARAJAS’ EXPRESS JOURNEY</h1>
            <div className="icons">
                <p>----------   <FontAwesomeIcon icon={faTrain} />  -----------</p>
            </div>
            <div className="ME-journy-para" style={{fontSize:18}}>
                <p>If you want to go on a royal journey, then Maharajas’ Express is one of the best options for you. With exclusive discounts and best-in-class royal services, it is not equal to the journeys offered by Maharajas’ Express.</p>
            </div>
            <div className="journey-image">
            <Link to="/routeMap"><img src={HOI} className="image1" alt="HOI" /></Link>
            <Link to="/routeMap"><img src={IP} alt="IP" /></Link>
            <Link to="/routeMap"><img src={IS} className="image3" alt="IS" /></Link>
            </div>
            <div className="icons">
                <p>******************************</p>
            </div>
            <div className="ExteriorHeading">
                <h2>Photo Gallery - Train Exterior</h2>
            </div>
            <div className="photo-galary">
                <img src={E3} className="e3" />
                <img src={E4} className="e3" />
            </div>
            <div className="icons">
                <p>******************************</p>
            </div>
            <div className="ExteriorHeading">
                <h2>MAHARAJAS’ EXPRESS: LUXURY TRAIN TRAVEL IN INDIA</h2>
            </div>
            <div className="ME-journy-para">
                <div className="down-para">
                <p>Maharajas’ Express – an initiative of Indian Railways Catering and Tourism Corporation (IRCTC) – is the latest luxury train to be introduced in India.</p>
                <p>Dubbed India’s equivalent to the Orient Express of Europe, this Maharaja train is rated by prestigious travel magazines and luxury guides as one of the greatest rail journeys in the world.</p>
                <p>Maharaja Express has been designed to redefine executive travel. But there’s more to it than sheer class. With its 7 tastefully crafted rail journeys, it presents India in a way never seen before. Long before the arrival of colonial power, India used to be the land of maharajas. Kingdoms were founded, cultures flourished and art developed.</p>
                <br/>
                <p>The Maharajas journeys are crafted to offer you a glimpse into this rich heritage and culture of India through:</p>
                <p><FontAwesomeIcon icon={faCheck} /> Cultural immersions through insider experiences</p>
                <p><FontAwesomeIcon icon={faCheck} /> Visits to forts and palaces replete with history</p>
                <p><FontAwesomeIcon icon={faCheck} /> Guided tours to World Heritage Sites</p>
                <p><FontAwesomeIcon icon={faCheck} /> Excursions into National Parks to witness untamed wildlife</p>
                <p><FontAwesomeIcon icon={faCheck} /> Arrangement of folk dances at select destinations performed by local artists</p>
                <p><FontAwesomeIcon icon={faCheck} /> Traditional Indian hospitality</p>
                <br/>
                <p>Whereas life off the train is designed to offer cultural interactions, life on board is all about refinement, opulence, and elegance. All guest salons are named after a precious stone or the Navratnas. Each coach incorporates the gemstone after which they are named as its motif. For optimum comfort and luxury, each guest cabin is equipped with:</p>
                <p><FontAwesomeIcon icon={faCheck} /> A spacious wardrobe</p>
                <p><FontAwesomeIcon icon={faCheck} /> Individual climate control</p>
                <p><FontAwesomeIcon icon={faCheck} /> Luggage held underneath the bed</p>
                <p><FontAwesomeIcon icon={faCheck} /> 24hrs availability of paramedics on Board.</p>
                <p><FontAwesomeIcon icon={faCheck} /> Electronic smoke detection systems & free Wi-Fi internet.</p>
                <p><FontAwesomeIcon icon={faCheck} /> Direct International dial telephone facility in each passenger cabin.</p>
                <p><FontAwesomeIcon icon={faCheck} /> Air Ambulance service in case of emergencies</p>
                <br/>
                <p>Guests could engage in recreational activities inside the Rajah Club – Lounge Car. Rajah Club has a well-stocked library with general books and pictorial guide books offering glimpses of Indian Maharajas who used to rule their kingdom before India became a democracy. Board games and card games could also be enjoyed in Rajah Club over a sip of your favorite wine. At one end stands the bar and at the other stands a souvenir shop named Treasure Chest from where you could buy mementos of this royal train journey.</p>
                <p>Come live a Maharaja life now on board the most luxurious train in the world. Embark on a saga of adventure, elegance, and romance on board Maharajas’ Express, which definitely is one of the finest travel experiences in the world, a journey like no other.</p>
            </div>

            </div>
        </>
    )
}

export default Main;
