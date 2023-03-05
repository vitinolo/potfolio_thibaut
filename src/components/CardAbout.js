import React from 'react';

const CardAbout = ({icone,name}) => {
    return (
        <div className='slide-in-left'>
            <div className="item">{icone} {name}</div>
        </div>
    );
};

export default CardAbout;