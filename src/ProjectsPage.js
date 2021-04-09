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
                                 <Homebutton path="/" className="col-1 " type="white" name="home"></Homebutton>
                            </div>
                            <div className="pads">                           
                                 <Homebutton className="col-1 " type="white"  name="contact"></Homebutton>
                            </div>
                            <div className="pads">                           
                                 <Homebutton className="col-1 " type="white"  name="resume"></Homebutton>
                            </div>
                            <div className="pads">                           
                                 <Homebutton className="col-1 " type="white"  name="blog"></Homebutton>
                            </div>
                        </div>
                        <h1 className = "proj center">projects</h1>
                        <h3 className="fade-in center justsomestuff row-xl">just some stuff i've been working on...</h3>
                        <div className="row">
                        <div className="padding col-xl">
                            <Project title="Julia Set Visualizer" live="https://rnv.itch.io/julia" description="A tool used to analyze Julia Sets, quadratic iterators, the Mandelbrot Set, and fixed point theory. Made using the Unity game engine" image={juliaimage}/>
                        </div>
                        <div className="padding col-xl">
                            <Project title="Ninth Circle" live="https://rnv.itch.io/ninth-circle" description="A puzzle game about a lost ghost trying to escape a tower. This was the final project of my game design class, and it was made using the Unity game engine." image={inc}/>
                        </div>
                        <div className="padding col-xl">
                            <Project title="Chess" code="https://github.com/arnav404/chess" live="" description="(In development) An online chess website similar to chess.com." image={chess}/>
                        </div>
                        <div className="padding col-xl">
                            <Project title="This Website" live="https://arnav.pro" code="https://github.com/arnav404/portfolio" description="in development" image={website}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
