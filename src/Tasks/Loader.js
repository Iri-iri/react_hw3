import React from 'react';
import './Styles.css';

class Loader extends React.Component {
  state = {
    loading: false,
    greeting: '',
  };

  loader = () => {
    setTimeout(() => {
      this.sayHi();
    }, 3000);
    this.setState({ loading: true });
  };

  sayHi = () => {
    this.setState({ loading: false, greeting: 'Hello!' });
  };

  render() {
    return (
      <div className='btn'>
        <button onClick={this.loader}>Say hello</button>
        {this.state.loading && (
          <div className='centre'>
            <div className='loader'></div>
          </div>
        )}
        {this.state.greeting && <div>Hello!</div>}
      </div>
    );
  }
}

export default Loader;
