import React from 'react';

const Social = () => {
    return (
        <div className='social'>
            <div className='socialContent'>      
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/thibaut-lenoir-5ab863238/"  aria-label="lien linkedin" target="_blank" rel="noopener noreferrer" title="linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/vitinolo"  aria-label="lien github" target="_blank" rel="noopener noreferrer" title="github">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>         
            </div>
            
        </div>
    );
};

export default Social;