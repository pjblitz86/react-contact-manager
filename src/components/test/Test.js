import React, { Component } from 'react';

class Test extends Component {
  // Testing life-cycle hooks
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps'); // used with redux mostly, but being deprecated
  }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   // this will be used more instead of componentWillReceiveProps
  //   return null;
  // }

  // static getSnapshotBeforeUpdate(prevProps, prevState) {} // also new incoming

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
