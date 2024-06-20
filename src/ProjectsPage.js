import React from 'react'
import Project from './Components/Project'
import projects from './data/projinfo.js'
import games from './data/gameinfo.js'
import './ProjectsPage.css'
import Homebutton from './Components/homebutton'
import HomeLink  from './Components/homelink'

const ProjectsPage = () => {

    return (
        <div>
            <div className='backstuff'>
            <div className="appBar">
                    <div align="center" className="appBarRow paddingTop">
                    <HomeLink/>
                        <tr>
                        <td>
                            <Homebutton type="blue" path="/resume/" name="resume"/>
                        </td>
                        <td>
                            <Homebutton type="blue" path="/blog/" name="blog"/>
                        </td>
                        </tr>
                    </div>
                    </div>
                <div className="column container">
                    <div className='container column center paddingbig'>
                        <div className='ring center'>
                            <h2 className = "whitetext">projects</h2>
                        </div>
                    </div>
                    <h3 className="desc headingtext center">games, simulations, and more</h3>
                    <p/>
                    <div class="">
                    <div class="row rowOfSelectable form-group">
                        {games.map((project, index) => (
                            <div class="col-6 col-sm-6 col-md-6 col-lg-4">
                            <div class="card">
                                <Project stack={project.stack} genres={project.genres} title={project.title} live={project.live} code={project.code} description={project.description} blurb={project.blurb} image={project.image} showPic={project.showPic}/>
                            </div>
                            </div>
                        ))
                        }
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
