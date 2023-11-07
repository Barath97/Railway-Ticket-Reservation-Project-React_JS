import React from 'react';
import Navbar from '../NavBar/Navbar';
import './RouteMap.css';
import JP1 from '../image/JP1.png';
import JP2 from '../image/JP2.png';
import JP3 from '../image/JP3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain} from "@fortawesome/free-solid-svg-icons"; 
import Footer from '../footer/footer';

const RouteMap = () => {
  return (
    <div>
        <Navbar/>
        
        <div className="RM-journy-para">
            <h2>MAHARAJAS EXPRESS ROUTE MAP</h2>
                <div className="icons">
                    <p>----------   <FontAwesomeIcon icon={faTrain} />  -----------</p>
                </div>
            <div className="down-para">
                <p>The Maharajas’ Express offers a delightful journey to five northern and north-central states of India. You will travel to Rajasthan, Uttar Pradesh, Gujarat, Maharashtra, Madhya Pradesh, and Delhi in the comfort of the Maharajas’ Express trains.</p>
                <br/>
                <p>As the name suggests, it offers a royal journey when you treat your eyes to the scenic beauty and enrich your mind with the cultural heritage of India. Along with its state-of-the-art design, this Indian luxury train provides all modern facilities and comfort onboard during the journey.</p>
                <br/>
                <p>The Maharajas’ Express offers four luxurious journeys covering the heritage cites of the five states. Here are the route maps of the four Maharajas’ Express journeys namely Heritage of India, Indian Panorama, Indian Splendor and Treasures of India.</p>
            </div>
            <h3>Heritage of India Route Map</h3><br/>
            <div className="down-para">
                <p><b>Duration</b>: 6 Nights / 7 Days</p>
                <p><b>Destinations Covered</b>: Mumbai - Udaipur - Jodhpur - Bikaner - Jaipur - Ranthambore - Agra - Delhi</p>
                <br/>
                <p>The 7-days Heritage of India tour commences in Mumbai and proceed to the royal state of India Rajasthan. Here the first stop is the city of lakes Udaipur. Visit the beautiful forts and enjoy boating on the charming lakes in Udaipur and board the train for your next destination Blue City Jodhpur. Explore the famous temple, forts, and palaces in Jodhpur before your luxury train moves towards the home to the desert camel Bikaner. Visit famous sites such as Junagarh Fort and Lalgarh Palace and enjoy camel safari in Bikaner. The next stop of Maharajas' Express is heritage city Jaipur where you will enjoy elephant ride to Amber Fort and visit famous sites including City Palace and Hawa Mahal.</p>
                <br/>
                <p>The journey continues and you can go for a tiger safari at Ranthambore National Park before reaching Agra with a stop at Fatehpur Sikri. Explore the Mughal architectural splendors at Agra and Fatehpur Sikri. Wonder at the Taj Mahal and other UNESCO World Heritage Sites before the train moves towards Delhi to conclude the journey.</p>
                <br/>
                <img src={JP1}/>
            </div>
             
            <h3>Indian Panorama Route Map</h3><br/>
            <div className="down-para">
                <p><b>Duration</b>: 6 Nights / 7 Days</p>
                <p><b>Destinations Covered</b>: Delhi - Jaipur - Ranthambore - Fatehpur Sikri - Agra - Orchha - Khajuraho - Varanasi - Delhi</p><br/>
                <p>This journey offers glimpses of diverse beauty that make India incredible. The 7-days tour that caters to all types of travelers starts in Delhi with Jaipur as its first stop. Explore the beautiful forts and palaces in the pink city such as City Palace, Amber Fort, Jantar Mantar, etc. The next stop is Ranthambore to enjoy a wildlife safari at this famous national park. The luxury train enters the Mughal city Fatehpur Sikri to reach Agra. Visit the magnificent Taj Mahal and other heritage sites at historical city Fatehpur Sikri and Agra. From Agra, the Maharajas' Express turns towards Orchha and Khajuraho. Visit the impressive temples at Khajuraho and admire the artistic grandeur of the rock-cur statues. After experiencing the extreme beauty of Indian art and culture, board your luxury train to reach sacred city Varanasi. Take a spiritual dip into the mighty Ganga and witness the auspicious Ganga Aarti. The Maharaja’ Express now will move towards Delhi where the journey will come to an end.</p><br/>
            </div>
            <img src={JP2}/>
             
            <h3>Indian Splendor Route Map</h3><br/>
            <div className="down-para">
                <p><b>Duration</b>: 6 Nights / 7 Days</p>
                <p><b>Destinations Covered</b>: Delhi - Agra - Ranthambore - Jaipur - Bikaner - Jodhpur - Udaipur - Mumbai</p><br/>
                <p>The 7-days Indian Splendor tour offers something to every kind of travelers. From the architectural wonder like Taj Mahal at Agra to the pure wilderness at Ranthambore National Park and stunning palaces, hills and lakes at Udaipur, a unique journey is waiting for you to experience adventure, culture, and the bounty of nature.</p><br/>
                <p>The tour starts in Delhi and stops at Agra, the city of Taj. From there, get ready for interacting with the wild population at the Ranthambore National Park. It is famous for tigers where you can enjoy the tiger safari or explore the forest all by yourself.</p><br/>
                <p>The next stop is Jaipur which is painted in the colorful culture and royalty portrayed by the beautiful forts and palaces.</p><br/>
                <p>Now the Maharajas’ Express will turn towards the desert with its stop at Bikaner. Visit the unique and unexplored Rat temple’ where rats are worshipped. After this unparalleled experience, the train will take you to Jodhpur. Enjoy nature’s most wonderful gift – the picturesque views of the desert and board the train for the next destination Udaipur. Visit the marble palaces, lakes and lush green hills of Udaipur.</p><br/>
                <p>The last stop of the journey is Mumbai, where everyone comes with dreams in eyes. The city has everything to offer to its guests – food, culture, history and most importantly, Bollywood!.</p><br/>
            </div>
            <img src={JP3}/>
        </div>
        <Footer />
    </div>
  )
}

export default RouteMap