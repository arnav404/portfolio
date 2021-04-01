import React from 'react'
import './homebutton.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import {Link} from 'react-router-dom';

const Homebutton = (props) => {

    return (
        <Link to={props.path+""}>
            <button className="bigbux fade-in big">
                <h3 className="h3 word row-sm">{props.name}</h3>
            </button>
        </Link>
    )
    
}

export default Homebutton
