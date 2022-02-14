import React, { Component } from 'react';
import StudentList from './components/StudentList';

export default class App extends Component {
  render() {
    return (
      <>
        <div className='container'>
        <h1>Hello! This is a table of all my classmates</h1>
        <StudentList/>
        </div>
      </>
    );
  }
}