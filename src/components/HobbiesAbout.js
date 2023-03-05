import React from 'react';
import CardAbout from './CardAbout';

const HobbiesAbout = () => {
    const hobbies = [
        {
            id:5,
            name:'code',
        },
        {
            id:4,
            name:'piano',
        },
        {
            id:3,
            name:'peinture',
        },
        {
            id:2,
            name:'randonnée',
        },
        {
            id:1,
            name:'bricolage',
        },
    ]
    return (
        <div className='hobbies card'>
            <span>Hobbies:</span>
            {   hobbies
                    .map((hobby) =>(
                        <CardAbout 
                            key={hobby.id}
                            name={hobby.name}
                        />
                    ))
            }
        </div>
    );
};

export default HobbiesAbout;