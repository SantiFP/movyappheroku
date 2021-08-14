import React from 'react';

export const Pricing = () => {
    
    return (
        <>
        
        <div className="md:absolute top-40 left-10 xl:ml-24 ">

            {/* <!-- Distintos <p> con distintos saltos de linea para cada resolución (móvil,tablet y desktop) --> */}

            <p className="font-semibold mt-5 md:hidden">One more streaming app, 
            may be it will be the best</p>

            <p className="font-semibold mt-5 hidden md:block lg:hidden">One more streaming app, 
            may be it will be the <br /> best</p>

            <p className="font-semibold mt-5 mb-4 hidden lg:block">One more streaming app, 
            may be it will <br /> be the best</p>

            {/* <!------------------------------> */}

            <p className="font-normal text-lg mt-0.5 lg:mb-24">USD 10.50/month</p>

            <button className="boton rounded-lg py-2 px-16
            mt-4  ">SIGN UP NOW</button>

            <p className="text-white txt mt-6 ml-4">*Price may vary depending on the currency or platform used for payment.
            <br /> Third-party fees may apply.</p>

            
        </div>


        <hr className="mt-12 ml-20 mr-20 bg-white h-0.5 mb-16 md:hidden" />

        </>
    )
}