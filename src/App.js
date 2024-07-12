import Navbar from "./Navbar"
import LandingPage from "./LandingPage"
import Blog from "./Blog";
import Podcast from "./Podcast";
import Portfolio from "./Portfolio";
import "./index.css";
import Video from "./videos"; 


   


function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Blog/>
      <Podcast/>
      <Portfolio/>
      <Video/>
     

    </div>
  );
}

export default App;
