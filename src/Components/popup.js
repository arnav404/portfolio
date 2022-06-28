import React from 'react'
import './popup.css'
import { useState } from 'react'

import socket from '../socket.png'
import unity from '../unity.png'
import node from '../node.png'
import react from '../react.png'
import swift from '../swift.png'
import express from '../express.png'

const Popup = (props) => {

    var technologies = [socket, unity, node, react, swift, express]

    if(props.isShown) {
        return (
            <div className="backgrounddiv">
                <div className="theCard row">
                    <div className="column popupcol col-xl">
                        <h1 className="popuptitle">{props.name}</h1>
                        <h3 className="desc">{props.description}</h3>
                        <h4 className="builtusing">Built using:</h4>
                        <div className="stack">
                            {props.stack.map((item, i) => {
                                return <img className="logo" src={technologies[props.stack[i]]}></img>
                            })}
                        </div>
                        <div className="row buttonrow">
                            <div className="padding">
                                <div className="liveButton row-1 padding">
                                    <a target="_blank" href={props.live} className="big">
                                        <b className="buttontext">Live</b>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="liveButton row-1 padding">
                                <a target="_blank" href={props.code} className="big">
                                    <b className="buttontext">Code</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(<div/>)
    }

}

export default Popup
