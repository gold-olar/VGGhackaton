import React from 'react';
import './footer.css'


const Footer = ()=>{
   
    return(
        <div>
            <div className= "footer">
                <p className="footer_text"> Copyright {new Date().getFullYear() } Alpha Devs</p>
            </div>
        </div>
    )
}


export default Footer;