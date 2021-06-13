import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="145814847"
                        title="Lenovo IdeaPad 3 14 Laptop, 14.0 FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10"
                        price={449.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41hCoCHfdjL._AC_US160_.jpg"
                        rating={4} />
                    <Product
                        id="15425691"
                        title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                        price={99.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
                        rating={4} />
                    <Product
                        id="14585467"
                        title="AmazonBasics 9 Volt Everyday Alkaline Batteries - Pack of 8"
                        price={10.44}
                        image="https://images-na.ssl-images-amazon.com/images/I/51yjDn1slQL._AC_US160_.jpg"
                        rating={4} />
                    <Product
                        id="78614847"
                        title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
                        price={178.95}
                        image="https://images-na.ssl-images-amazon.com/images/I/31mcmc5f35L._AC_US160_.jpg"
                        rating={3} />
                </div>
                <div className="home__row">
                    <Product
                        id="147864847"
                        title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
                        price={25.98}
                        image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
                        rating={5} />
                    <Product
                        id="1445345847"
                        title="Logitech C920x Pro HD Webcam"
                        price={110.99}
                        image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UY218_.jpg"
                        rating={4} />
                    <Product
                        id="17867865847"
                        title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
                        price={114.99}
                        image="https://m.media-amazon.com/images/I/91JA5-hAnoL._AC_UY218_.jpg"
                        rating={4} />
                </div>
                <div className="home__row">
                    <Product
                        id="167563847"
                        title="ANRRI Blue Light Blocking Glasses Lightweight Eyeglasses Frame Filter Blue Ray Computer Game Glasses"
                        price={25.95}
                        image="https://m.media-amazon.com/images/I/51+HjpuyRAL._AC_UY218_.jpg"
                        rating={1} />
                    <Product
                        id="1455463877"
                        title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case included), Black – US Version"
                        price={119.99}
                        image="https://m.media-amazon.com/images/I/51xvUyKNLCL._AC_UY218_.jpg"
                        rating={2} />
                </div>
                <div className="home__row">
                    <Product
                        id="14586752847"
                        title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                        price={42}
                        image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
                        rating={5} />
                </div>
            </div>

        </div>
    )
}

export default Home
