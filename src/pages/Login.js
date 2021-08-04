import React from 'react';
import { HeaderLogin } from '../components/Header';
import { FormLogin } from '../components/Form';
import  Footer  from '../components/Footer';
import Button from '../components/Button';



export const Login = () => {

    return ( 
        <>
            <div >
                <HeaderLogin text ="SIGN UP"/>
                <div className="md:mt-48"> 
                    <FormLogin placeHolder="Email" />
                    <FormLogin placeHolder="Password" />
                </div>
                <div className="mt-8 md:mt-12"><Button text="LOG IN NOW" /></div>
                <div className="mt-10 mb-5 font-medium text-sm md:hidden"><Footer /></div>
                
            </div>
        </>
    )
}

