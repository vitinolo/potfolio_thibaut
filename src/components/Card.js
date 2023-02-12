import React from 'react';

function Card ({type, name, languages, languagesIcons, source, info})  {
    return (
        <div className='projectContent'>
            <h1>{name}</h1>
            <span>{type}</span>
            <div className='languages'>{languages}</div>
            <div className="languagesIcons">{languagesIcons}</div>
            <div className="source"><a href={source}>Code source</a></div>
            <div className="info">{info}</div>
        </div>    
    );
};

export default Card;