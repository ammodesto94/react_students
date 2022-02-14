import React, { Component } from 'react';

export default class StudentRow extends Component {
  render() {
      const student = this.props.student
    return (
        <tr>
            <th>{student.id}</th>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
        </tr>

    );
  }
}