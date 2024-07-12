
import Video from "./videos"; 
import Navbar from "./Navbar"
import LandingPage from "./LandingPage"
import Podcast from "./Podcast";
import "./index.css";
import Blog from "./Blog";
function App(){
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Blog/>
      <Podcast/>
      <Video/>
     

    </div>
  );
};

export default App;
