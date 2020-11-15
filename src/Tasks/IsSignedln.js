import React from 'react';
import './Styles.css';

class IsSignedln extends React.Component {
  state = {
    isSignedln: false,
  };

  sign = () => {
    setTimeout(() => { this.setState({ isSignedln: true }) }, 3000);
  };

  render() {
    return (
      <div className='btn'>
        {this.state.isSignedln ? (
          <p>Hello user</p>
        ) : (
          <button onClick={this.sign}>Sign in</button>
        )}
      </div>
    );
  }
}
export default IsSignedln;
