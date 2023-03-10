import React from 'react';

function Card ({type, picture, name, languages, source, lien, info})  {
    return (
        <div className='projectContent scale-in-center'>
            <>
                <div className='wrapper'>
                    <h1>{name}</h1>
                    <img src={picture} width="300px" height="150px" alt="projet" />
                </div>
                <div className='wrapper2'>
                    <div className='type'>Type de projet: {type}</div>
                    <div className="source"><a href={source} title='cliquer vers code source'>Code source</a></div>
                    <div className="source"><a href={lien} title='cliquer vers le site'>Lien site</a></div>
                    <div className='languages'>Langages: {languages}</div>
                    <div className="info">Info: {info}</div>
                </div>
            </>
        </div>    
    );
};

export default Card;