import React from 'react'
import Project from './Components/Project'
import juliaimage from './juliaimage.png'
import inc from './INC.png'
import chess from './chess.png'
import website from './website.png'
import './ProjectsPage.css'
import Homebutton from './Components/homebutton'

const ProjectsPage = () => {
    return (
        <div>
                <div className="backstuff">
                    <div className="column">
                        <div className="row">
                            <div className="pads">                           
                                 <Homebutton path="/" className="col-1 " name="HOME"></Homebutton>
                            </div>
                            <div className="pads">                           
                                 <Homebutton className="col-1 " name="CONTACT"></Homebutton>
                            </div>
                            <div className="pads">                           
                                 <Homebutton className="col-1 " name="RESUME"></Homebutton>
                            </div>
                            <div className="pads">                           
                                 <Homebutton className="col-1 " name="BLOG"></Homebutton>
                            </div>
                        </div>
                        <p className="projecttext fade-in row-xl"><span>projects
                        </span><span>projects</span><span>projects</span></p>
                        <h3 className="fade-in justsomestuff row-xl">just some stuff i've been working on...</h3>
                        <div className="row">
                        <div className="padding col-xl">
                            <Project title="Julia Set Visualizer" live="https://rnv.itch.io/julia" description="A tool used to analyze Julia Sets, quadratic iterators, the Mandelbrot Set, and fixed point theory. Made using the Unity game engine" image={juliaimage}/>
                        </div>
                        <div className="padding col-xl">
                            <Project title="This Website" live="https://arnav.pro" code="https://github.com/arnav404/portfolio" description="in development" image={website}/>
                        </div>
                        <div className="padding col-xl">
                            <Project title="Ninth Circle" live="https://rnv.itch.io/ninth-circle" description="A puzzle game about a lost ghost trying to escape a tower. This was the final project of my game design class, and it was made using the Unity game engine." image={inc}/>
                        </div>
                        <div className="padding col-xl">
                            <Project title="Chess" code="https://github.com/arnav404/chess" live="" description="(In development) An online chess website similar to chess.com." image={chess}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
