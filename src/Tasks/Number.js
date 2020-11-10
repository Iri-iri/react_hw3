import React from 'react';
import Button from './Button';

class Number extends React.Component {
  state = {
    number: 0,
  };

  // plus = () => {
  //   this.setState({ number: this.state.number + 1 });
  // };

  // minus = () => {
  //   this.setState({ number: this.state.number - 1 });
  // };

  change = (x) => {
    this.setState({ number: this.state.number + x });
  };

  render() {
    return (
      <div>
        <Button
          label='Plus'
          click={() => {
            this.change(1);
          }}
        />
        {this.state.number}
        <Button
          label='Minus'
          click={() => {
            this.change(-1);
          }}
        />
      </div>
    );
  }
}

export default Number;
