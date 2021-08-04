import React from 'react';

const Icons = (props) => {
    return (
        <>
            
                <div className="inline-block  " >
                    <img className="inline-block" src={props.iconImage} alt="icon" />
                    <p>{props.paragraph}</p>
                </div>
        </>
    )
}

export default Icons;