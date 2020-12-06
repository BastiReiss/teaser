import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Vimeo from '@u-wave/react-vimeo';
//import MuteBtn from './components/MuteBTN';
import BTN_muted from './BTN_muted.svg';
import BTN_unmuted from './BTN_unmuted.svg';

//
class App extends React.Component {
  constructor(props) {
    super(props);
//props
    this.state = {
      videoIndex: 0,
      volume: 0,
      muted: true
    };

    this.handleMuted = this.handleMuted.bind(this);
    this.handleVolume = this.handleVolume.bind(this);

    /*
    this.handlePause = this.handlePause.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
*/
    //props end
  }
  handleMuted(event) {
    console.log(this.state.muted);
    this.setState({
      muted: !this.muted,
    });
  }
  handleVolume(event) {
    console.log(this.volume);
    this.setState({
      volume: parseFloat(event.target.value),
    });
  }



  // this.function mute(params) {
  //   Vimeo.muted = !Vimeo.muted;
  // }


  render (){
    const { videoIndex, muted, volume } = this.state;
    return(
    <div className="App">
      <div class="videowrapper">
      <Vimeo  volume={volume} muted={muted} width="500" height="281" background="1" frameborder="0" 
        video="76979871" controls="false" title="false" sidedock="false" allow="autoplay; fullscreen" loop />
      </div>
      <div class="flex h-screen">
        <label><image alt="muted" src={BTN_muted}/></label>
        <div class="m-auto">
        <div id="player">
          <i class="fa fa-volume-down"></i>
          <div id="volume">
            <input
                    type="range"
                    value={volume}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={this.handleVolume}
                  />
          </div>
          <i class="fa fa-volume-up"></i>
        </div>
        </div>
        <label><image alt="muted" src={BTN_unmuted}/></label>
      </div>
    </div>
  );
  }
}



export default App;