import React from 'react';

const Footer =()=>{
    let date = new Date();

    return (
        <footer>
            <p>
                created by Ariel, © {date.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer;