import React from 'react';
import { Header } from '../components/Header';
import { Pricing } from '../components/Pricing';
import { Info, Devices } from '../components/InfoAndDevices';
import Footer  from '../components/Footer';
import celular from '../components/Assets/celular.png';
import consola from '../components/Assets/consola.png';
import television from '../components/Assets/television.png';
import laptop from '../components/Assets/laptop.png';



export const Home = () => {

    return (
        <> 
            <div>
                <Header text="LOGIN" />
                <Pricing />
                <Info />
                {/* iconos para movil */}
                <div className="flex flex-row place-content-around mb-10 md:hidden">
                    <Devices image={television} title="TV" l1="Amazon Fire TV" l2="Android TV" l3="Apple TV" l4="Chromecast" l5="LG TVs"
                    l6="Roku" l7="Samsung"/>  
                    <Devices image={laptop} title="Computer" l1="Chrome OS" l2="MacOs" l3="Windows PC"/>
                </div>
                <div className="flex flex-row place-content-around md:hidden "> 
                    <Devices image={celular} title="Mobile & Tablet" l1="Amazon Fire Tablets" l2="Android Phones & Tablets" l3="iPhone & iPad"/> 
                    <Devices image={consola} title="Game Consoles" l1="PS4" l2="PS5" l3="Xbox One" l4="Xbox Series X" l5="Xbox Series S" />
                </div> 
                {/* iconos para tablet y desktop */}
                <div className="hidden md:block md:flex md:flex-row md:place-content-around md:mb-10 ">
                    <Devices image={television} title="TV" l1="Amazon Fire TV" l2="Android TV" l3="Apple TV" l4="Chromecast" l5="LG TVs"
                    l6="Roku" l7="Samsung"/>  
                    <Devices image={laptop} title="Computer" l1="Chrome OS" l2="MacOs" l3="Windows PC" />
                    <Devices image={celular} title="Mobile & Tablet" l1="Amazon Fire Tablets" l2="Android Phones & Tablets" l3="iPhone & iPad"/> 
                    <Devices image={consola} title="Game Consoles" l1="PS4" l2="PS5" l3="Xbox One" l4="Xbox Series X" l5="Xbox Series S" />
                </div>   
                <div className="mt-10 mb-5 font-medium text-sm"><Footer /></div>

            </div>
       </>
    )
}
                        
                