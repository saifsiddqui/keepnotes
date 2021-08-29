import React from 'react';

const Footer = () =>{
    const time=new Date().getFullYear();
    return(
        <>
        <div className="footer">
            <p>Copywrite {time} </p>
        </div>
        </>
    );
}
export default Footer;

