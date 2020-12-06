import React, {Component} from 'react';
import BTN_muted from '../static/assets/BTN_muted.svg';
import BTN_unmuted from '../static/assets/BTN_unmuted.svg';

const imagesPath = {
  plus: BTN_muted,
  minus: BTN_unmuted
}

class MuteBtn extends React.Component {
  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
    //console.log(this.props.muted);
  }

  getImageName = () => this.state.open ? 'plus' : 'minus'

  render() {
    const imageName = this.getImageName();
    return (
      <div>
        <img class="pointer" style={{maxWidth: '50px'}} src={imagesPath[imageName]} onClick={this.toggleImage} />
      </div>
    );
  }
}
export default MuteBtn;