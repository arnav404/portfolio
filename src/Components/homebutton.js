import React from 'react'
import './homebutton.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import {Link} from 'react-router-dom';

const Homebutton = (props) => {

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
            <button className="whitebux fade-in big">
                <h3 className="pinktext word row-sm">{props.name}</h3>
            </button>
        </Link>
    )

    }
    
}

export default Homebutton
