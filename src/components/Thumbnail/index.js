import React from 'react';
import Spider from '../Assets/sffh.png';
import BCS from '../Assets/bcs.jpg';
import Phillips from '../Assets/phillips.jpg';
import Batman from '../Assets/batman.jpg';
import StarWars from '../Assets/swV.jpg';
import Godfather from '../Assets/godfather.jpg';
import KingKong from '../Assets/kingkong.jpg';
import Pianist from '../Assets/elpianista.jpg';
import Dory from '../Assets/findingdory.jpg';



const Thumbnail = (props) => {
    return (
        <>

            <div >

                <h1 className="text-left mb-6 ml-6">{props.h1}</h1>

                <div className="flex flex-row ml-5">

                    <div className="thumby"><img className="thumbnail" src={Spider} alt="img" /></div>
                    <div className="thumby"><img className="thumbnail" src={BCS} alt="img" /></div>
                    <div className="thumby"><img className="thumbnail" src={Phillips} alt="img" /></div>
                    <div className="thumby"><img className="thumbnail" src={Batman} alt="img" /></div>
                    <div className="thumby hidden md:block"><img className="thumbnail" src={StarWars} alt="img" /></div>
                    <div className="thumby hidden md:block"><img className="thumbnail" src={Godfather} alt="img" /></div>
                    <div className="thumby hidden md:block"><img className="thumbnail" src={KingKong} alt="img" /></div>
                    <div className="thumby hidden md:block"><img className="thumbnail" src={Pianist} alt="img" /></div>
                    <div className="thumby hidden md:block"><img className="thumbnail" src={Dory} alt="img" /></div>

                </div>
            </div>
        </>
        
    )
}

export default Thumbnail;