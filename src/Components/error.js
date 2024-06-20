import React from 'react'
import './error.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeLink from './homelink'
import Typewriter from '../Typewriter'

const Error = () => {

    const text = `Pleasant day, huh. Looks like you're lost. And it's probably because you messed with the url. You'll find your way back for sure (First things first, update URL).`

    return (
        <div>
            <div className="errorLink">
                <HomeLink/>
            </div>
            <div align="center" className="divvy">
                <p className="bigtext fade-in row-xl message"><Typewriter text={["   ", "\uFFFDine day, isn't it?", "\uFFFDooks l\uFFFDke you're lost.", "It's \uFFFDrobably becau\uFFFDe you messed w\uFFFDth the url.", "Don't \uFFFDo that again......... ev\uFFFDr.", ":D"]} delay={50} /></p>
            </div>
        </div>
        
    )
}

export default Error
