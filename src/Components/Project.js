import React from 'react'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import joystick from '.././joystick.png'
import code from '.././code.png'
import Popup from './popup'
import { useState } from 'react'


const Project = (props) => {

    const [isShown, setShown] = useState(false)

    return (
        <div>
            <div onClick={() => setShown(false)}>
                <Popup live={props.live} code={props.code} stack={props.stack} description={props.description} name={props.title} isShown={isShown} image={props.image}></Popup>
            </div>
            
            
            <img onClick={() => setShown(true)}  className="imgg" src={props.image} />
        </div>
    )
}

export default Project






                
                

                