import React from 'react';
import './Styles.css';

class Input extends React.Component {
  state = {
    someValue: '',
  };

  render() {
    return (
      <input
        type='text'
        onChange={(event) => this.setState({ someValue: event.target.value })}
        value={this.state.someValue}
      />
    );
  }
}

export default Input;
