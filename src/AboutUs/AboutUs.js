import React from "react";
import "../AboutUs/AboutUs.css"
import Navbar from "../NavBar/Navbar";
import Footer from "../footer/footer";
import S1 from "../image/S1.png";
import S2 from "../image/S2.png";
import S3 from "../image/S3.png";
import T1 from "../image/T1.png";
import S4 from "../image/S4.png";
import P4 from "../image/Exterior3.png";


const AboutUs=()=>{
    return(
        <>
            <Navbar/>
            <div className="ExteriorHeading">
                <h2>MAHARAJAS' EXPRESS TRAIN</h2>
            </div>
            <div className="ME-journy-para">
                <div className="down-para">
                    <p>An amalgamation of style, luxury, lavishness and grandeur - Maharajas' Express enjoys the status of being India's most opulent luxury train. What it offers is far more than just a train journey - it lets you explore India' most exotic and colorful locations like the battle scarred forts, the palaces of breathtaking grandeur and whimsical charm, wildlife parks and sanctuaries surrounded by barren mountains and the raw natural beauty of lakes and water bodies. All in all, a journey aboard Maharajas' Express is kaleidoscopic and panoramic and one lures you with its magical richness and stunning variety.</p><br/>
                    <div className="photo-galary">
                        <img src={S1} className="P1"/>
                        <img src={S3} className="P1"/>
                        <img src={S2} className="P1"/>
                    </div>
                    <p>The luxury train that was flagged off in 2010 offers an insight to the breathtaking landscapes and the rich culture and heritage India is blessed with. The train travels across some of the most captivating landscapes in India, covering some of the most well-known tourist destinations including Delhi, Mumbai, Agra, Jaipur, Ranthambore etc. The medley of beautiful landscape, charismatic culture, diverse traditions and mystical history of India comes alive in the 5 Maharajas' Express journeys, which Indian Railways Catering and Tourism Corporation (IRCTC)has recently launched - Heritage of India, Treasures of India, Gems of India, Indian Panorama and The Indian Splendor.</p><br/>
                    <p>The embodiment of ultimate luxury train travel - the Maharaja Express is often compared to the Orient Express of Europe. Owned by the IRCTC, this luxury train offers a royal ride and features state of the art amenities including uninterrupted internet, Plasma televisions, DVD players, individual climate control, electronic safes, gourmet dining at its fancy restaurants and bars with an exclusive collection of beverages.</p><br/>
                    <p>Traveling via the Maharajas' express is nothing less than traveling like the Kings and Queens of the bygone era. Taking the guests to the world of grace, elegance and romance, Maharaja Express Luxury train journey makes your imagination stir by the constantly changing stunning landscape outside. Enriching your travel casket with a sequence of unforgettable moments, this royal Indian train makes you come to this colorful country again and again.</p><br/>
                    <h3>HISTORY</h3><br/>
                    <p>The Maharajas' Express is the majestic creation of Indian Railway Catering and Tourism Corporation Ltd. (IRCTC) and Cox & Kings, the veteran travel agents. Now owned solely by IRCTC, it is Asia's costliest train which began its royal journey in 2010. The train was built after an extensive research on some of the most luxurious trains in the world.</p><br/>
                    <div>
                        <img src={S4} className="S4"/>
                        <img src={P4} className="P4"/>
                    </div>
                    <br /> 
                    <p>It was named to the 2011 list of World's Top 25 Trains by The Society of International Railway Travelers and has been internationally acclaimed for its onboard accommodation and dining facilities, service, and off-train excursion programmes. It is India's only train featuring a Presidential Suite spread over an entire carriage, offering guests a truly majestic experience as they explore the dramatic Indian landscape.</p><br/>
                    <p>Within just two years of its inception the train successfully placed itself among the top notch luxury trains in the world with its 7 star hospitality measures. Where most of the luxury trains in India cater to the specific locations of Rajasthan, Karnataka and Maharashtra, it is the first Indian train to take tourists across a mix of cultures.</p><br/>
                    <p>The lavishly appointed saloons of this royal train draw inspiration from the royal saloons used for travelling by the erstwhile Maharajas, Nizams and Colonial rulers. To add charm to its vintage look, the train décor displays the beautiful use of artifacts of the traditional Indian style.</p><br/>
                    <h3>CABIN CONFIGURATION</h3><br/>
                    <ul className="list" style={{fontSize:16}}>
                        <li>5 Deluxe Cars</li>
                        <li>2 Suite Cars</li>
                        <li>1 Bar car and 1 Lounge Car</li>
                        <li>1 Kitchen Car</li>
                        <li>1 Executive Managers & Tour Managers Coach</li>
                        <li>6 Junior Suite Cars</li>
                        <li>1 Presidential Suite Car</li>
                        <li>2 Restaurant Cars</li>
                        <li>2 Generator Coaches</li>
                        <li>1 Staff Coach</li> 
                    </ul><br/>
                    <h3>CARRYING CAPACITY OF THE CABINS / SUITES</h3><br/>
                    <div className="T1">
                        <img src={T1} />
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs;