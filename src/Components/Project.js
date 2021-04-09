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
                <Popup description={props.description} name={props.title} isShown={isShown} image={props.image}></Popup>
            </div>
            
            <div onClick={() => setShown(true)} className="card" style={{ backgroundColor: '#222121', width: '18rem' }}>
                <img className="imgg" src={props.image} />
                <h1 className="blurrytext title">{props.title}</h1>
                <div className="row buttons">
                    <div className="row-1 padding">
                        <a target="_blank" href={props.live} className="live">
                            <b className="buttontext">L</b>
                        </a>
                    </div>
                    <div className="row-1 ">
                        <a target="_blank" href={props.code} className="code">
                            <b className="buttontext">C</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project






                
                

                