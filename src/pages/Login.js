import React from 'react';
// import { useState } from 'react';
import { HeaderLogin } from '../components/Header';
import { FormLogin } from '../components/Form';
import  Footer  from '../components/Footer';
import Button from '../components/Button';
// import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'



export const Login = () => {

    const alert = useAlert();

    
    return ( 
        <>
            <div >

            
                <HeaderLogin text ="SIGN UP"/>
                 <div className=" mt-8 md:mt-44"> 
                    <section className= "mt-1 md:float-left md:w-2/5 "  >
                     
                        <form className=" flex flex-col w-11/12 mx-auto "  method="POST" action="https://movybackend.herokuapp.com/login"> 

                            <FormLogin id="inputName" name="name" placeHolder="Email"  type="text" />
                            <FormLogin name="password" placeHolder="Password" type="password" />

                
                            <div className="mt-8 md:mt-12"><Button onClick={() => { alert() }} text="LOG IN NOW" /></div>

                        </form>
                
                    </section>
                </div>
                
                <div className="mt-10 mb-5 font-medium text-sm md:hidden"><Footer /></div>
 
            </div>
            
        </>
    )

 
}

