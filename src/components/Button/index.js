import React from 'react';

const Button = (props) => {
    return (
       <>
        <button className="boton rounded-lg py-2 px-16 mt-8 md:mt-12">{props.text}</button>
       </>
    )
}

export default Button;