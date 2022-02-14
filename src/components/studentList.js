import React, { Component } from 'react';
import StudentRow from './StudentRow';

export default class StudentList extends Component {
    constructor(props){
        console.log(`Component Constructed`)
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount(){
        console.log(`Component Mounted`)
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    students: data
                })
            })
    }


  render() {
      console.log(`Component Rendered`)
    return (
        <>
            <h1>For Kekambas-79!</h1>
            <table className='table table-dark table-striped'>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                </tr>
            </thead>
            <tbody>
                {this.state.students.map((s,i) => <StudentRow student={s} key={i} />)}
            </tbody>
            </table>
        </>
    );
  }
}