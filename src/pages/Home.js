import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import ThibautCv from '../documents/Thibaut_Lenoir_cv.pdf';

const Home = () => {
    return (
        <div className='home'>
                <VisibilityNav />
                <Social />
                <div className='homeContent'>
                    <h1 >Thibaut Lenoir</h1>
                    <span>Développeur de sites web.</span>
                    <h2>Créé et développé par Thibaut -© 2023 Tout droit réservé-</h2>
                </div>
                <div className="pdf">
                    <a href={ThibautCv}  aria-label="lien cv" target="blank">Télécharger cv</a>
                </div>    
        </div>
    );
};

export default Home;