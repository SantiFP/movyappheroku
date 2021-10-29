import React from 'react';
import { Header } from '../components/Header';
import { FormSignUp,FormTypeRadio } from '../components/Form';
import Footer from '../components/Footer';
import Button from '../components/Button';
// import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom'


export const SignUp = () => {

    
    // const alert = useAlert();

    return ( 
        <>
        
            <div>
            
                <Header text="LOG IN" />
                {/* method="POST" action="http://localhost:5000/signup"  */}
                <form   >
                    <div className="mt-12 flex flex-col w-11/12 mx-auto  md:absolute md:ml-1 md:top-20 md:w-2/5">
                        <FormSignUp name="name" placeholder="Name" type="text"/>
                        <FormSignUp  name="email" placeholder="Email" type="email"/>
                        <FormSignUp  name="password" placeholder="Password" type="password"/>
                        <FormSignUp name="confirmpassword" placeholder="Confirm Password" type="password"/>
                    </div>
                    <div>
                       <FormTypeRadio />
                       <Link to="/login"><Button  text="SIGN UP NOW" /></Link>

                    </div>
                </form>
                
            </div>
            <div><Footer /></div>
        </>
    )
}