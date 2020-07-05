import React from 'react';
 
class Counter extends React.Component {
  state = { count: 0 };
 
  handleClick = () => this.setState({ count: this.state.count + 1 })

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}
 
export default Counter;
