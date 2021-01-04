import React from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Vimeo from '@u-wave/react-vimeo';
import text from './text/Text.json'
// import MuteBtn from './components/MuteBTN';
import wien_logo from './static/assets/wien_logo.jpg';
import vba_logo from './static/assets/vba_logo.jpg';

//
class App extends React.Component {
  constructor(props) {
    super(props);
//props
    this.state = {
      videoId: 489776978,
      volume: 0,
      muted: true,
      active: false,
      info_show: false
    };
    this.text = text;
    console.log(text);
/*
video IDs:
test: 171084582
civaTrailer: 489776978
*/
    this.handleMuted = this.handleMuted.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleInfo =this.handleInfo.bind(this);

    //props end
  }
  handleMuted(event) {
    console.log(this.state.muted);
    this.setState({
      muted: !this.muted,
    });
  }

  handleVolume(event) {

    if(this.state.volume === 0){
      this.setState({
        /*volume: parseFloat(event.target.value),*/
        volume: 0.9,
      });
    }else{
      this.setState({
        /*volume: parseFloat(event.target.value),*/
        volume: 0,
      });
    }
    this.setState({active: !this.state.active});
    console.log("mute");
  }
  handleInfo(event){
    this.setState({info_show: !this.state.info_show});
    console.log("info");
  }



  // this.function mute(params) {
  //   Vimeo.muted = !Vimeo.muted;
  // }


  render (){
    const { videoId, muted, volume,active,info_show} = this.state;
    return(
    <div className="App">
      <div className="videowrapper">
      <Vimeo volume={volume} muted={muted} width="500" height="281" background="1" frameborder="0" 
        video={videoId} controls="false" title="false" sidedock="false" allow="autoplay; fullscreen" loop inline />
      </div>
      <div id="overlay" className={ (info_show ? 'visible' : 'hidden')}>
      <div id="info_content" className="flex flex-wrap -mx-1 overflow-hidden lg:-mx-4 xl:-mx-3 ">
        <div id="info_left" className="my-1 px-1 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2 animate-fadeIn">
    <h1 id="info_headline" className="">
      {text.text_mobile.h1}</h1>
          <h2>
          {text.text_mobile.subh1}
          </h2>
          <h2 id="info_date" className="">
          {text.text_mobile.date}
          </h2>
        </div>
        <div id="info_right" className="my-1 px-1 w-full overflow-scroll lg:my-4 lg:px-4 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2 ">
          <h1 id="info_caption" className="">
          {text.text_mobile.caption}
          </h1>
          <p id="info_text" className="">
            {text.text_mobile.main}
          </p>
          <h1 id="info_caption2" className="">
          {text.text_mobile.caption2}
          </h1>
          <div>
            <div>
            <span className="text-3l">{text.text_mobile.sub}</span>
            <span className="text-3l">{text.text_mobile.sub2}</span>
            </div>
            <div className="partner_images">
            <img className="logo" src={wien_logo} alt="wien_logo"></img>  <img className="logo" src={vba_logo} alt="wien_logo"></img>  
            </div>
          </div>
        </div>
        </div>
      </div> 
      <div id="nav" className="flex controls nav">
        <div className="m-auto">
        <div id="player" className="grid grid-cols-3 gap-2 place-content-center">
          <a href="#" className={'speaker ' + (active ? 'umute' : 'mute')}
             onClick={this.handleVolume} >
              <span></span>
          </a>
          <div id="BTN_info" className="grid grid-cols-3 gap-2 justify-right">
          <a href="#" className={"BTN"} onClick={this.handleInfo} >
              <span className={ (info_show ? 'strike' : 'nostrike')}>info</span>
          </a>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
  }
}



export default App;