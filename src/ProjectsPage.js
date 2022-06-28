import React from 'react'
import Project from './Components/Project'
import juliaimage from './juliaimage.png'
import inc from './INC.png'
import dd from './DD.png'
import website from './website.png'
import './ProjectsPage.css'
import Homebutton from './Components/homebutton'
import royale from './royale.png'

const ProjectsPage = () => {
    return (
        <div>
            <div className="backstuff">
                <div className="column">
                    <div className="row row-xl">
                        <div className="pads">                           
                                <Homebutton path="/" className="col-1 " type="white" name="home"></Homebutton>
                        </div>
                        <div className="pads">                           
                                <Homebutton className="col-1 " type="white"  name="resume"></Homebutton>
                        </div>
                        <div className="pads">                           
                                <Homebutton className="col-1 " type="white"  name="blog"></Homebutton>
                        </div>
                    </div>
                    <h1 className = "proj fouroh center">Projects</h1>
                    <p/>
                    <div className="row row-xl">
                        <div className="padding col-xl">
                            <Project stack={[0,2,3,5]} title="Digit Dynasty" code="https://github.com/arnav404/chess" live="" description="(In development) An online chess website similar to chess.com, where users can play against each other or against a neural network AI." image={dd}/>
                        </div>
                        <div className="padding col-xl">
                            <Project stack={[1]} title="Julia Set Visualizer" live="https://rnv.itch.io/julia" description="A tool used to analyze Julia Sets, quadratic iterators, the Mandelbrot Set, and fixed point theory. Made for a mathematics class at UCSB." image={juliaimage}/>
                        </div>
                        <div className="padding col-xl">
                            <Project stack={[2, 3]} title="Portfolio" live="https://arnav.pro" code="https://github.com/arnav404/portfolio" description="The website you are currently viewing." image={website}/>
                        </div>
                        <div className="padding col-xl">
                            <Project stack={[1]} title="Ninth Circle" live="https://rnv.itch.io/ninth-circle" description="A puzzle game about a lost ghost trying to escape a tower. Made for a game development class at UCSB." image={inc}/>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
