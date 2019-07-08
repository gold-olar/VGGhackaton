import React from 'react';
import { Button } from 'reactstrap';
import {Link } from 'react-router-dom';
import './header.css';
import './bg1.jpg';


const Header =({RouteChange})=>{
    return(
        <div className ="header">
            
            <div className ='header_description'>
                LEARNING REDEFINED <br></br>
                
            <span className ="smaller_description"> Take a quiz by uploading a document  <br/>
           <Link to ="/upload"> <Button  className="primary" color="primary">UPLOAD</Button></Link>
            </span>

            </div>

        </div>
    )
}

export default Header;



