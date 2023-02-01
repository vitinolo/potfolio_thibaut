import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import ThibautCv from '../documents/Thibaut_Lenoir_cv.pdf';

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
                    <div class='light x1'></div>
                    <div class='light x2'></div>
                    <div class='light x3'></div>
                    <div class='light x4'></div>
                    <div class='light x5'></div>
                    <div class='light x6'></div>
                    <div class='light x7'></div>
                    <div class='light x8'></div>
                    <div class='light x9'></div>
            </div>
        </>
    );
};

export default Home;