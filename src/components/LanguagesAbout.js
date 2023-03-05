import React from 'react';
import CardAbout from './CardAbout';

const LanguagesAbout = () => {
    const languages = [
        {
            id:5,
            icone:<i class="fab fa-css3-alt"></i>,
            name:'Css3',
        },
        {
            id:4,
            icone:<i class="fab fa-html5"></i>,
            name:'Html5',
        },
        {
            id:3,
            icone:<i class="fab fa-js-square"></i>,
            name:'Javascript',
        },
        {
            id:2,
            icone:<i class="fab fa-react fa-spin"></i>,
            name:'React.js',
        },
        {
            id:1,
            icone:<i class="fab fa-node-js"></i>,
            name:'Node.js',
        },
    ]
    return (
    <div className='languages card'>
        <span>Langages:</span>
        {   languages
                .map((language) =>(
                    <CardAbout
                        key={language.id}
                        icone={language.icone}
                        name={language.name}
                    />
                ))
        }
    </div>
    );
};

export default LanguagesAbout;