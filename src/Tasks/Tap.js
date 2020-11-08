import React from 'react';

class Tap extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.clickFunction(this.props.label)}>
        {this.props.label}
      </button>
    );
  }
}

export default Tap;
