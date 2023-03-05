import React from 'react';
import CardAbout from './CardAbout';

const SoftSkillsAbout = () => {
    const softskills = [
        {
            id:7,
            name:'adaptabilité',
        },
        {
            id:6,
            name:'auto-discipline',
        },
        {
            id:5,
            name:'empathie',
        },
        {
            id:4,
            name:'coopération',
        },
        {
            id:3,
            name:'résilience',
        },
        {
            id:2,
            name:'curiosité',
        },
        {
            id:1,
            name:'créativité',
        },
    ]
    return (
        <div className='softskills card'>
            <span>Soft skills:</span>
            {   softskills
                    .map((softskill) =>(
                        <CardAbout 
                            key={softskill.id}
                            name={softskill.name}
                        />
                    ))
            }
        </div>
    );
};

export default SoftSkillsAbout;