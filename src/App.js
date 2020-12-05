import logo from './logo.svg';
import './App.css';
import Vimeo from '@u-wave/react-vimeo';
import BTN_muted from './BTN_muted.svg';
import BTN_unmuted from './BTN_unmuted.svg';


function App() {

  // this.function mute(params) {
  //   Vimeo.muted = !Vimeo.muted;
  // }

  const changeIcon = (e) => {
      console.log(Vimeo.video);
     // e.target.src ={BTN_unmuted};
      Vimeo.muted =! Vimeo.muted;
  }
  const muteVideo = () =>{
    console.log(Vimeo.video);
    // e.target.src ={BTN_unmuted};//
     Vimeo.muted =! Vimeo.muted;
  }

  return (
    <div className="App">
      <div class="videowrapper">
      <Vimeo  onHover={muteVideo} width="500" height="281" background="1" frameborder="0" muted="true"
        video="76979871" controls="false" title="false" sidedock="false" allow="autoplay; fullscreen" loop />
      </div>
      <div class="flex h-screen">
        <div class="m-auto">
          <h1 class="text-blue-900" > CIVA FESTIVAL </h1>
          <input onClick={muteVideo} alt="btnmuted" type="image" src={BTN_muted}>
          </input>
        </div>
      </div>
    </div>
  );
}

export default App;