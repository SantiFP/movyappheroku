import React from 'react';
import { Movie } from '../Movies';
import {useState} from 'react'

const Thumbnail = ({ info, title}) => {
   

  const [plot, setPlot] = useState('');
  

  const showOverview = (newValue) => {
    setPlot(newValue);
   }
     
   const [movieTitle, setMovieTitle] = useState('');
  

   const handleMovieTitle = (newValue) => {
     setMovieTitle(newValue);
    }
      
      return (

        <>
        <div>
          
            <h1 className="text-left mb-6 ml-6 text-white cursor-pointer " >{title}</h1>
    
      
            <div className="flex flex-row">
              
                  <div className="flex flex-row ml-5 ">
                    
                    {info?.map((movie) => <Movie data={movie} key={movie._id} 
                    overview={showOverview} movieTitle={handleMovieTitle}/>)}
                
                  
                  </div>
                  
                  <div className="w-3/12">
                    
                          <h1 className="text-sm font-semibold -mt-3 movieTitle">{movieTitle}</h1>

                          <p className=" mt-3 text-center  float-right plot" >{plot}</p>

                  </div>
                
            </div>
          
        </div>

        </>
      )
    }
    
    
    
    export default Thumbnail;
                                                                                    
            
      
            

      
