import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homebutton from './Components/homebutton';
import Typewriter from './Typewriter';
import HelpButton from './Components/helpbutton';

function Home() {

  return (
    <div className="App">
      <div className="bigdiv">
        <div className="column">
          <div className='ring'>
            <h1 className="whitetext">
              <Typewriter text={["arnav thirunagari"]} delay={100} />
            </h1>
          </div>
          <div align="center" className="homebuttonrow">
            <tr>
            <td>
                <Homebutton type="blue" path="/resume/" name="resume"/>
              </td>
              <td>
                <Homebutton type="blue" path="/projects/" name="projects"/>
              </td>
              <td>
                <Homebutton type="blue" path="" name="blog"/>
              </td>
              <td>
                <HelpButton type="blue" path="/replacethis/" name=""/>
              </td>
            </tr>
          </div>
        <p/>
        <h3 className="desc headingtext center">bio</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;