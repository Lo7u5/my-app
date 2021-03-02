import React from 'react';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className='rounded-lg w-max object-cover object-center'
                     src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencealert.com%2Fimages%2Farticles%2Fprocessed%2F1shutterstock_336744542_1024.jpg&f=1&nofb=1'
                     alt='backImg'/>
            </div>
            <div className='grid mt-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-app'>
                <img className='rounded-lg shadow-myBoxShadow h-64 place-self-center'
                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZNF3UzwEu_aKaw6Jh8wdrwHaNK%26pid%3DApi&f=1"
                     alt='ava'/>
                <div className='text-myGray-darkIce sm:col-span-3 lg:col-auto'>
                    <p>Name: {props.profile.fullName}</p>
                    <p>City: Che</p>
                    <p>Status: QO</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;