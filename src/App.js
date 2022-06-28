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
                    value: 20
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
          <h1 className="fouroh row-xl whitetext">Arnav</h1>
          <div className="padding"></div>
          <div className="row">
            <div className ="row-1 padding">
              <Homebutton type="blue" path="/resume/" name="Resume"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton type="blue" path="/projects/" name="Projects"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton type="blue" path="/blog/" name="Blog"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;