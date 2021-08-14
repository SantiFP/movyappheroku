import React from 'react';
import { useEffect, useState } from 'react'
import Categories from '../components/Categories';
import Icons from '../components/Icons';
import Thumbnail from '../components/Thumbnail/index';
import Footer from '../components/Footer';
import signoplay from '../components/Assets/signoplay.png';
import signomas from '../components/Assets/signomas.png';
import signoinfo from '../components/Assets/signoinfo.png';
import { getPopular,getUpcoming,getTopRated } from '../api/getMovies';



export const Movies = () => {

      const [ popularMovies, setPopularMovies ] = useState ([]);
      const [ upcomingMovies, setUpcomingMovies ] = useState ([]);
      const [ topRatedMovies, setTopRatedMovies ] = useState ([]);
      const [ popularMoviesMd, setPopularMoviesMd ] = useState ([]);
      const [ upcomingMoviesMd, setUpcomingMoviesMd ] = useState ([]);
      const [ topRatedMoviesMd, setTopRatedMoviesMd ] = useState ([]); 

     

      useEffect(() => {
        getPopular()
        .then((response)=>{            
            setPopularMovies(response.results.slice(0,4));     
        })
       
        .catch((error)=>{
            console.log("error: ", error);
        });

        
    },[]);  

    useEffect(() => {
        getPopular()
        .then((response)=>{            
            setPopularMoviesMd(response.results.slice(0,9))      
            
        })
       
        .catch((error)=>{
            console.log("error: ", error);
        });

        
    },[]); 
    
    useEffect(() => {
        getUpcoming()
        .then((response)=>{            
            setUpcomingMovies(response.results.slice(0,4));
          
        })
       
        .catch((error)=>{
            console.log("error: ", error);
        });

        
    },[]);

    useEffect(() => {
        getUpcoming()
        .then((response)=>{            
            setUpcomingMoviesMd(response.results.slice(0,9));
          
        })
       
        .catch((error)=>{
            console.log("error: ", error);
        });

        
    },[]);
 
    useEffect(() => {
        getTopRated()
        .then((response)=>{            
            setTopRatedMovies(response.results.slice(0,4));
        })
       
        .catch((error)=>{
            console.log("error: ", error);
        });

        
    },[]);

    useEffect(() => {
        getTopRated()
        .then((response)=>{            
            setTopRatedMoviesMd(response.results.slice(0,9));
        })
       
        .catch((error)=>{
            console.log("error: ", error);
        });

        
    },[]);
 
    
    return(
        <>
            <div className=" backgroundMovies lg:w-full bg-black">
                <div className="font-semibold tracking-wider positionVader ">
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
                        <div className=" pt-10  md:pt-0 md:relative md:top-28 ">

                            <div className="pt-6 md:hidden"><Thumbnail title="My List" data={topRatedMovies} /></div>
                            <div className="hidden md:block pt-6  "><Thumbnail title="My List" data={topRatedMoviesMd} /></div>
                            <div className="pt-12 -mt-5 md:hidden"><Thumbnail  title="Trending Now" data={popularMovies} /></div> 
                            <div className="pt-12  hidden md:block bg-black md:-mt-5"><Thumbnail  title="Trending Now" data={popularMoviesMd} /></div> 
                            <div className="mt-6 bg-black md:hidden"><Thumbnail title="Recently Added" data={upcomingMovies}/></div>
                            <div className="hidden md:block bg-black md:pt-6"><Thumbnail  title="Recently Added" data={upcomingMoviesMd}/></div>
                            <div className="font-medium bg-black text-sm pt-20  md:pt-0 lg:text-left lg:pl-96"><Footer /></div>
                        </div>
                         {/* el background negro repetido en estos componentes se tuvo que poner por un 
                        comportamiento extraño con el color de fondo */}
                        
                </div>
            </div> 
           
        </>
    )

}

