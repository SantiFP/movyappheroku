import React from 'react';
import Categories from '../components/Categories';
import Icons from '../components/Icons';
import Thumbnail from '../components/Thumbnail';
import Footer from '../components/Footer';
import signoplay from '../components/Assets/signoplay.png';
import signomas from '../components/Assets/signomas.png';
import signoinfo from '../components/Assets/signoinfo.png';

export const Movies = () => {
    return(
        <>
            <div className="backgroundMovies bg-black ">
                <div className="font-semibold tracking-wider positionVader ">
                        <Categories />
                        <div className="-mb-5" >
                            <Icons paragraph="My list" iconImage={signomas}/>
                            <span className="mx-4"><Icons paragraph="Play" iconImage={signoplay}/></span>
                            <Icons paragraph="Info" iconImage={signoinfo}/>
                        </div>
                        {/* sombras con boxshadow y divs sin contenido*/}
                        <div className="ghostDiv1 boxshadow hidden md:block lg:hidden"></div>
                        <div className="ghostDiv2 boxshadow hidden lg:block"></div>
                        {/* ---------------------- */}
                        <div className="boxshadow2 pt-12">
                            <div><Thumbnail h1="My list" /></div>
                            <div className="bg-black mt-6"><Thumbnail h1="Trending now" /></div>
                            <div className="bg-black pt-6 "><Thumbnail h1="Recently added" /></div>
                            <div className="font-medium text-sm pt-20 bg-black md:pt-0 lg:text-left lg:pl-96"><Footer /></div>
                        </div>
                         {/* el background negro repetido en estos componentes se tuvieron que poner por un 
                        comportamiento extraño con el color de fondo */}
                </div>
            </div>
          
        </>
    )
}