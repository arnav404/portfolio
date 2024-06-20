import React from 'react'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popup from './popup'
import { useState, useEffect } from 'react'
import { marked } from 'marked'

import action from '../media/icons/action.png'
import puzzle from '../media/icons/puzzle.png'
import stealth from '../media/icons/stealth.png'
import platformer from '../media/icons/platformer.png'
import coop from '../media/icons/coop.png'
import { useNavigate, useLocation, useParams }  from 'react-router-dom'
import PopupBackground from './PopupBackground'

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

const Project = (props) => {

    const [isShown, setShown] = useState(false)

    const genres = [action, puzzle, stealth, platformer, coop]

    const history = useNavigate();

    useEffect(() => {
      if(isShown == false)
        history('/projects');
    }, [isShown]);

    return (
        <div className="project">
            <PopupBackground isShown={isShown} setShown={setShown}></PopupBackground>
            <div className='popupBackground'>
              <Popup live={props.live} code={props.code} genres={props.genres} stack={props.stack} description={props.description} name={props.title} isShown={isShown} image={props.image} showPic={props.showPic}></Popup>
            </div>
            
            
            <div className="imgbox" onClick={() => {setShown(true); history('/projects/'+props.title) }}>
                <div className="column">
                    <img className="imgg" src={props.image}
       onMouseOver={e => (e.currentTarget.src = props.showPic)}
       onMouseOut={e => (e.currentTarget.src = props.image)} />
                    <h4 className="desc subtitle d-none d-sm-none d-md-inline-block d-lg-inline-block" dangerouslySetInnerHTML={{ __html: marked(props.blurb) }}></h4>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Project)






                
                

                