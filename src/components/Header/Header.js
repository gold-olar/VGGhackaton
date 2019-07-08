import React from 'react';
import { Button } from 'reactstrap';
import './header.css';
import './bg1.jpg';


const Header =({RouteChange})=>{
    return(
        <div className ="header">
            
            <div className ='header_description'>
                LEARNING REDEFINED <br></br>
                
            <span class ="smaller_description"> Take a quiz by uploading a document  <br/>
            <Button onClick = {()=>RouteChange('scan')} className="primary" color="primary">UPLOAD</Button>
            </span>

            </div>

        </div>
    )
}

export default Header;



