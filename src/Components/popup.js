import React from 'react'
import './popup.css'
import { useState } from 'react'

const Popup = (props) => {

    if(props.isShown) {
        return (
            <div className="backgrounddiv">
                <div className="theCard row">
                    <img className="img col-xl" src={props.image}></img>
                    <div className="column popupcol col-xl">
                        <h2 className="row-1 popuptitle">{props.name}</h2>
                        <h3 className="desc row-1">{props.description}</h3>
                        <div className="row row-1">
                            <div className="row-1 padding">
                                <a target="_blank" href="https://rnv.itch.io/ninth-circle" className="live">
                                    <b className="buttontext">Live</b>
                                </a>
                            </div>
                            <div className="row-1 padding">
                                <button className="code">
                                    <b className="buttontext">Code</b>
                                </button>
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
