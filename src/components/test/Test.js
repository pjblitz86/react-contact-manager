import React, { Component } from 'react';

class Test extends Component {
  // Testing life-cycle hooks

  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps'); // used with redux mostly, but being deprecated
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   // this will be used more instead of componentWillReceiveProps
  //   return null;
  // }

  // static getSnapshotBeforeUpdate(prevProps, prevState) {} // also new incoming

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
