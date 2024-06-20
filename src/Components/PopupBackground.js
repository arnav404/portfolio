import React from 'react'
import './Project.css'



const PopupBackground = (props) => {
    if(props.isShown) {
        return (
            <div className='backgrounddiv' onClick={() =>{props.setShown(false)}}></div>
        )
    } else {
        return (
            <div/>
        );
    }
        
    
    
}

export default PopupBackground
