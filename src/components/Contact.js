import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    const { name, email, phone } = this.props; // destructuring
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
