import React from 'react';
import { useEffect, useState } from 'react'
import Categories from '../components/Categories';
import Icons from '../components/Icons';
import Thumbnail from '../components/Thumbnail/index';
import Footer from '../components/Footer';
import signoplay from '../components/Assets/signoplay.png';
import signomas from '../components/Assets/signomas.png';
import signoinfo from '../components/Assets/signoinfo.png';
import { getMovies } from '../api/getMovies';



export const Movies = () => {

      const [ movies, setMovies ] = useState ([]);
      const [ moviesSm, setMoviesSm ] = useState ([]);
     
      useEffect(() => {
        getMovies()
        .then((response)=>{            
            setMovies(response.slice(0,9));     
        })
       
        .catch((error)=>{
            console.log("error: ", error);
        });

     },[]);  

        useEffect(() => {
            getMovies()
            .then((response)=>{            
                setMoviesSm(response.slice(9,13));   
            })
           
            .catch((error)=>{
                console.log("error: ", error);
            }); 

 },[]);  

     
    
    return(
        <>
            <div className=" backgroundMovies bg-black lg:w-full">
                <div className="font-semibold tracking-wider positionVader  ">
                        <Categories />
                        <div className="-mb-5" >
                            <Icons paragraph="My list" iconImage={signomas}/>
                            <span className="mx-4"><Icons paragraph="Play" iconImage={signoplay}/></span>
                            <Icons paragraph="Info" iconImage={signoinfo}/> 
                        </div> 
                        {/* sombras con boxshadow y divs sin contenido*/}
                        <div className="ghostDivSm boxshadowSm md:hidden"></div> 
                        <div className="ghostDivMd boxshadow hidden md:block lg:hidden"></div> 
                        <div className="ghostDivLg boxshadow hidden lg:block"></div> 
                        {/* ---------------------- */}
                        <div className=" pt-10 md:pt-0 md:relative md:top-28 ">
                            <h5 className="text-base font-normal text-white mb-5 mouseOver md:-mt-16">Click the pics to watch the trailer or mouse over to see the plot</h5>
                            <div className="pt-6 md:hidden"><Thumbnail title="My List" info={moviesSm} /></div>
                            <div className="hidden md:block pt-6  "><Thumbnail title="My List" info={movies} /></div>
                            <div className="pt-12 -mt-5 md:hidden"><Thumbnail  title="Trending Now" info={moviesSm} /></div> 
                            <div className="pt-12  hidden md:block bg-black md:-mt-5"><Thumbnail  title="Trending Now" info={movies} /></div> 
                            <div className="mt-6 bg-black md:hidden"><Thumbnail title="Recently Added" info={moviesSm}/></div>
                            <div className="hidden md:block bg-black md:pt-6"><Thumbnail  title="Recently Added" info={movies}/></div>
                            <div className="font-medium bg-black text-sm pt-20  md:pt-0 lg:text-left lg:pl-96"><Footer /></div>
                        </div>
                         {/* el background negro repetido en estos componentes se tuvo que poner por un 
                        comportamiento extraño con el color de fondo */}
                        
                </div>
            </div> 
           
        </>
    )

}

