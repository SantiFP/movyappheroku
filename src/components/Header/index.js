import React from 'react';
import imgheader from '../Assets/imgheader.jpg';
import imgheader2 from '../Assets/imgheader2.jpg';
import { Link } from 'react-router-dom';



export const Header = (props) => {  

return ( 
    <>
    
    <header>
         
        <img className="relative imgheader w-full" src={imgheader} alt="img" />

        <div><Link to='/login'><button className="boton text-xl rounded-lg py-1 px-5 absolute right-5 top-5">{props.text}</button></Link></div>

    </header>

    </>
         
    )}

export const HeaderLogin = (props) => {

    return ( 
    <>
     <header >

        <img className="relative imgheader w-full md:hidden " src={imgheader} alt="img" />

        <img className="hidden imgheader md:block float-right w-3/5 md:-mt-48" src={imgheader2} alt="img" />

        <div><Link to='/signUp'><button className="boton rounded-lg py-1 px-5 absolute right-5 top-5">{props.text}</button></Link></div>

     </header> 

    </>
    )
}



