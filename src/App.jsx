import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portafolio from './components/portafolio/Portafolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import './app.scss'


function App() {
  return (
    <div className="app">
     <Topbar/>   
     <div className="sections">
       <Intro/>
       <Portafolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
