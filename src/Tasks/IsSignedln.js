import React from 'react';
import './Styles.css';

class IsSignedln extends React.Component {
  state = {
    isSignedln: false,
  };

  sign = () => {
    this.setState({ isSignedln: true });
  };

  render() {
    return (
      <div>
        {this.state.isSignedln ? (
          <p>Hello user</p>
        ) : (
          <button onClick={setTimeout(this.sign, 3000)}>Sign in</button>
        )}
      </div>
    );
  }
}
export default IsSignedln;
