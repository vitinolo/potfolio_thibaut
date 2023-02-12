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
        <div className="icone-afficher-nav" aria-label='bouton navigation' onClick={changeVisibility} title="Afficher navigation">
            <i className="fas fa-ellipsis-h"></i>
        </div>
        <div>
            {visibility && <Navigation />}
        </div>
     </>
    );
};

export default VisibilityNav;