import React from 'react'
import './homebutton.css'
import {Link} from 'react-router-dom';

import resume from '../media/rresume.pdf'



const Homebutton = (props) => {

    if(props.name == "resume") {

        if(props.type === "blue") {

            return (
                <a href={resume} target="_blank">
                    <button className="bluebux fade-in big">
                        <h3 className="pinktext word row-sm">{props.name}</h3>
                    </button>
                </a>
            )
    
        } else {
    
    
        return (
            <a href={resume} target="_blank">
                <button className="bluebux fade-in big">
                    <h3 className="pinktext word row-sm">{props.name}</h3>
                </button>
            </a>
        )
    
        }

    } else {

        if(props.type === "blue") {

            return (
                <Link to={props.path+""}>
                    <button className="bluebux fade-in big">
                        <h3 className="pinktext word row-sm">{props.name}</h3>
                    </button>
                </Link>
            )
    
        } else {
    
    
        return (
            <Link to={props.path+""}>
                <button className="bluebux fade-in big">
                    <h3 className="pinktext word row-sm">{props.name}</h3>
                </button>
            </Link>
        )
    
        }

    }
    
    
}

export default Homebutton
