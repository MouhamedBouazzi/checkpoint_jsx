
import './App.css';
import imageInSrc from "./assests/imageInSrc.png"


function App() {
  return (
    <>
     <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Mouhamed</h1>
      <br />
      <img src={imageInSrc}   alt="hohoho"/>
      <br />
      <img src="/imageInPublic.png" alt="hoihoi" />
    </div>
    <div>
      
      {/* <img src="/imageInPublic.png"  alt="Meme21"/> */}
      {/* <img src={imageInSrc}  alt="meme35"/> */}
    </div>
    
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  </>
  );
}

export default App;
