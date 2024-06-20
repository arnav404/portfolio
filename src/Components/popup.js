import React from 'react'
import { marked } from 'marked';

import './popup.css'

import socket from '../media/icons/socket.png'
import unity from '../media/icons/unity.png'
import node from '../media/icons/node.png'
import react from '../media/icons/react.png'
import swift from '../media/icons/swift.png'
import express from '../media/icons/express.png'
import csharp from '../media/icons/csharp.png'

import code from '../media/icons/code.png'
import live from '../media/icons/joystick.png'
import wrench from '../media/icons/wrench.png'

const Popup = (props) => {

    var technologies = [csharp, unity, node, react, swift, express]

    if(props.isShown) {
        return (
            <div className='container'>
                <div className="padleft">
                <div className="theCard cont row">
                    <div className="column popupcol col-xl">
                        <div className='row-sm row'>
                            <div className='col-lg'>
                                <img className="banner d-none d-sm-none d-md-none d-lg-inline-block" src={props.image} />
                            </div>
                            <div className='col-lg'>
                                <img className="banner" src={props.showPic} />
                            </div>
                        </div>
                        <p/>
                        <tr className="row-sm">
                            <td className=''>
                                <h1 className="popuptitle" dangerouslySetInnerHTML={{ __html: marked(props.name) }}></h1>
                            </td>
                            <td className="stack ">
                                {props.stack.map((item, i) => {
                                    return <img className="logo" src={technologies[props.stack[i]]}></img>
                                })}
                            </td>
                        </tr>
                        <div className="row-sm row buttonset">
                            <div className='col-3'>
                                <form action={props.live}>
                                    <button type="submit" className='linkbutton'>
                                        <p className='col buttText'>demo</p>
                                    </button>
                                </form>
                            </div>
                            <div className='col-3'>
                                <form action={props.code}>
                                <button type="submit" className='linkbutton'>
                                    <p className='col buttText'>code</p>
                                    </button>
                                </form>
                            </div>
                            <div className='col-3'>
                                <form action={props.code}>
                                <button type="submit" className='linkbutton' disabled="true">
                                        <div className='row iconsAndText'>
                                            <p className='col buttText'>design</p>
                                            <div className='col imgSlot'>
                                                <img className="iconimg" src={wrench}></img>
                                            </div>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <p/>
                        <div className='row-sm'>
                        <h3 className="desc" dangerouslySetInnerHTML={{ __html: marked(props.description) }}></h3>
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
