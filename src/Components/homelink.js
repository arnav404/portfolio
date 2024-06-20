import React from 'react'
import './homelink.css'
import {Link} from 'react-router-dom';



const HomeLink = (props) => {
        return (
            <div className="cornerlogo">
                <Link className="link d-none d-lg-inline" to={"/"}>
                    <button className="transparentButton">
                        <p className="longlogo"><p>arnav.pro</p></p>
                        <p/>
                    </button>
                </Link>
                <Link className="link d-inline d-md-inline d-lg-none" to={"/"}>
                    <button className="transparentButton">
                        <p className="shortlogo"><p>a</p></p>
                        </button>
                    <p/>
                </Link>
            </div>
        )
    
    
}

export default HomeLink
