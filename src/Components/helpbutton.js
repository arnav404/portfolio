import React from 'react'
import './homebutton.css'
import {Link} from 'react-router-dom';

import resume from '../media/rresume.pdf'



const HelpButton = (props) => {
        return (
            <Link to={props.path+""}>
                <button className="helpbux fade-in big">
                    <h3 className="pinktext word row-sm">{props.name}</h3>
                </button>
            </Link>
        )
    
    
}

export default HelpButton
