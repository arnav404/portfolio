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
          <p className="titletext fade-in row-xl"><span>Hey, I'm Arnav
            </span><span>Hey, I'm Arnav</span><span>Hey, I'm Arnav</span></p>
          <h3 className="fade-in h3 row-xl">I'm a first year math major from Austin, going to school in Santa Barbara.</h3>
          <div className="padding"></div>
          <div className="row">
            <div className ="row-1 padding">
              <Homebutton path="/contact/" name="CONTACT"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton path="/resume/" name="RESUME"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton path="/projects/" name="PROJECTS"/>
            </div>
            <div className ="row-1 padding">
              <Homebutton path="/blog/" name="BLOG"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;