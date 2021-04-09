import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homebutton from './Components/homebutton';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles className="particles"
              params={{
            		particles: {
                  number: {
                    value: 40
                  },
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3199D1",
            					blur: 5
            				}
            			}
            		}
            	}}
            />
      <div className="container bigdiv">
        <div className="column">
          <h1 className="row-xl whitetext">Hey, I'm Arnav</h1>
          <h3 className="fade-in whitedesc row-xl">I'm a student and software developer from Austin, TX.</h3>
          <div className="padding"></div>
          <div className="row">
            <div className ="row-1 padding">
              <Homebutton type="blue" path="/contact/" name="contact"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton type="blue" path="/resume/" name="resume"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton type="blue" path="/projects/" name="projects"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton type="blue" path="/blog/" name="blog"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;