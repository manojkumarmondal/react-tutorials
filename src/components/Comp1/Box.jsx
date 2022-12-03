import React from 'react';
import style from './style.module.css';

const Box = (props) => {
    return (
        <div className={style.box}>
            <img style={{ height: '70%', width: '100%' }} src={props.imgUrl} alt="not found" />
            <h1>{props.title}</h1>
            <h2>{props.id}</h2>
        </div>
    )
};

export default Box