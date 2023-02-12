import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import ThibautCv from '../documents/Thibaut_Lenoir_cv.pdf';
import Light from '../components/Light';
const Home = () => {
    return (
        <>
            <div className='home'>
                    <VisibilityNav />
                    <Social />    
                    <p id='head1' class='header'>Thibaut Lenoir</p>
                    <p id='head2' class='header'>Développeur de sites web.</p>
                    <p id='head3' class='header'>Créé et développé par Thibaut</p>
                    <p id='head4' class='header'>- © 2023 Tout droit réservé -</p>
                    <p id='head5' class='header'>Bienvenue dans mon porfolio !</p>
                    <button className='cv'><a href={ThibautCv}  aria-label="lien cv" target="blank" title='télécharger cv'>Télécharger cv</a></button>
                    <Light />
            </div>
        </>
    );
};

export default Home;