import React from 'react';
import { Movie } from '../Movies';
import {useState} from 'react'

const Thumbnail = ({ data, title}) => {
   

  const [text, setText] = useState('');
  

  const showOverview = (newValue) => {
    setText(newValue);
   }
     
   const [textTitle, setTextTitle] = useState('');
  

   const handleTextTitle = (newValue) => {
     setTextTitle(newValue);
    }
      
      return (

        <>
        <div>
          
            <h1 className="text-left mb-6 ml-6 text-white cursor-pointer " >{title}</h1>
    
      
            <div className="flex flex-row">
              
                  <div className="flex flex-row ml-5 ">
                    
                    {data?.map((movie) => <Movie data={movie}
                    overview={showOverview} textTitle={handleTextTitle}/>)}
                
                  
                  </div>

                  <div className="w-3/12">
                    <h5 className="text-xs font-extralight text-blue-400 -mt-2 mb-2">Pass the mouse over the pics to see the plot</h5>
                    <h1 className="text-lg mb-3">{textTitle}</h1>
                    <p className="font-thin text-xs font-normal mr-1 float-right " >{text}</p>

                  </div>
                
            </div>
          
        </div>

        </>
      )
    }
    
    
    
    export default Thumbnail;
                                                                                    
            
      
            

      
