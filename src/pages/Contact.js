import React from 'react';
import VisibilityNav from '../components/VisibilityNav';
import Social from'../components/Social';
import Light from '../components/Light';

const Contact = () => {
    return (
        <div className='contact'>
            <VisibilityNav />
            <Social />
            <Light />
            <div className='contactContent'>
                <span>Retrouvez-moi sur Linkedin &nbsp;
                    <a href="https://www.linkedin.com/in/thibaut-lenoir-5ab863238/"  aria-label="lien linkedin" target="_blank" rel="noopener noreferrer" title="lien linkedin">
                        <i className="fab fa-linkedin"></i>,
                    </a> sur github  &nbsp;
                    <a href="https://github.com/vitinolo"  aria-label="lien github" target="_blank" rel="noopener noreferrer" title="lien github">
                        <i className="fab fa-github"></i>,
                    </a> et contactez moi par &nbsp;
                    <a href="mailto:lenoir677@gmail.com" aria-label="lien email" target="_blank" rel="noopener noreferrer" title="lien email">Email.</a>
                </span>
            </div>
        </div>
    );
};

export default Contact;