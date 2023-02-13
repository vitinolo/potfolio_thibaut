import React from 'react';

function Card ({type, name, languages, languagesIcons, source, info})  {
    return (
        <div className='projectContent'>
            <h1>{name}</h1>
            <span>Type: {type}</span>
            <div className='languages'>Langages: {languages}</div>
            <div className="languagesIcons">{languagesIcons}</div>
            <div className="source"><a href={source} title='cliquer vers code source'>Code source</a></div>
            <div className="info">Info: {info}</div>
        </div>    
    );
};

export default Card;