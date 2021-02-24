import React from 'react';
import preloader from '../../../assets/preloader.svg'
import s from './Preloader.module.css'

const Preloader = (props) => {
    return <div className={s.wrapper}>
        <img src={preloader}/>
    </div>
}

export default Preloader;