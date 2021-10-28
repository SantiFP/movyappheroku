import React from 'react';
// import Button  from '../Button'


export const FormLogin = ({placeHolder, name, type, id, onChange}) => {
    return (
        <>
          <input className="input mt-5 p-2 pl-5 py-3 placeholder-blue-500 font-semibold 
          md:py-4 lg:py-2 lg:mt-3" id={id} name={name} onChange={onChange} type={type} placeholder={placeHolder} />
         </>
    )
}

export const FormSignUp = ({placeholder, name, type,text}) => {
  return(

    <>
      <input className="input py-4 pl-5 placeholder-blue-500 font-semibold mt-2
      lg:py-3" placeHolder={placeholder}  name={name} type={type}/>
    </>
  )
}

export const FormTypeRadio = () => {

  return(
    <>
      <section>
        
            <h1 className="mt-5 mb-4 font-semibold text-xl">Choose your plan</h1>

            {/* <!-- Distintos <p> con distintos saltos de linea para cada resolución (móvil,tablet y desktop) --> */}

            <p className="text-xs lg:hidden">According with your plan we have an specific <br /> catalogue of movies</p>

            <p className="text-xs hidden lg:block">According with your plan we have an specific catalogue of movies</p>

            <form className="mt-5 text-left ml-6 font-semibold text-xl formulario md:w-4/12 md:mx-auto lg:w-3/12 lg:mx-auto ">
            
                <input type="radio" id="latin" name="signUp" value="latin" />
                <label className="md:pl-14" for="latin">Latino +</label><br />
    
                <input type="radio" id="inter" name="signUp" value="inter" />
                <label className="md:pl-14" for="inter">International +</label><br />
    
                <input className="mt-6" id="art" type="radio" name="signUp" value="art" />
                <label className="md:pl-14" for="art">Art +</label>
            
            </form>
    
      </section>


    </>
  )
}

