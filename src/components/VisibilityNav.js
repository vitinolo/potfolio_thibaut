import React from 'react';
import { useState } from 'react';
import Navigation from './Navigation';

const VisibilityNav = () => {
    const [visibility, setVisibility] = useState(false)
    function changeVisibility () {
        setVisibility(!visibility)
     }
    return (
    <>
        <div class="button_visibility" aria-label='bouton navigation'>
            <button  onClick={changeVisibility} title="Afficher navigation" className="icone-afficher-nav"><i class="fas fa-bars"></i></button>
        </div>
        <div>
         {visibility && <Navigation />}
        </div>
     </>
    );
};

export default VisibilityNav;