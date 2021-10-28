import React from 'react';



const Button = ({onClick, text}) => {
    return (
       <>
        <button type="submit" onClick={onClick} className="boton rounded-lg py-2 mb-24 mt-0 px-16 mt-8 md:mt-12">{text}</button>
      </>
    )
}

export default Button;