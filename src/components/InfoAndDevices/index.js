import React from 'react';

export const Info = () => {

    return (
        <>
            <article>

                <h1 className="mt-10 mb-4 font-semibold text-xl">Watch the way you want</h1>

                {/* <!-- Distintos <p> con distintos saltos de linea para cada resolución (móvil,tablet y desktop) --> */}

                <p className="text-xs md:hidden ">Enjoy the big screen experience on your TV, or <br /> watch on your tablet, laptop,phone and more. You 
                <br /> can watch an ever growing selection of titles in 4k.<br />
                Plus, you can stream on 4 screens at once, so <br /> everyone's happy.</p>

                <p className="text-xs hidden md:block lg:hidden">Enjoy the big screen experience on your TV, or  watch on your tablet, laptop,phone and more. You <br /> 
                can watch an ever growing selection of titles in 4k.
                Plus, you can stream on 4 screens at once, so <br />  everyone's happy.</p>

                <p className="text-xs hidden lg:block">Enjoy the big screen experience on your TV, or  watch on your tablet, laptop,phone and more. 
                You can watch an ever growing selection of titles in 4k. Plus, you can stream on 4 screens at once, so everyone's happy.</p>

                {/* <!----------------------->

                <!-----Distintos hr para cada resolución--> */}

                <hr className="hidden mt-12 ml-20 mr-20 bg-white h-0.5 md:block lg:hidden" />

                <hr className="mt-12 bg-white h-0.5 hidden lg:block lg:w-2/5 mx-auto" />

                <h1 className="mt-10 mb-10 font-semibold text-xl text-center lg:mt-0">Available on your favourite devices</h1>

            </article>

        </>
    )
}

export const Devices = (props) => {

    return (
        <>
            <div >

                <img className="device" src={props.image} alt="img" />

                    <h2>{props.title}</h2>

                        <dl>

                            <dt>{props.l1}</dt>
                            <dt>{props.l2}</dt>
                            <dt>{props.l3}</dt>
                            <dt>{props.l4}</dt>
                            <dt>{props.l5}</dt>
                            <dt>{props.l6}</dt>
                            <dt>{props.l7}</dt>
                            
                        </dl>
                            

            </div>
        </>
    )
}

                    
           
                    

                

           


