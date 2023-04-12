import React from "react";

import './Table.css'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      age: '',
      address: ''
    };
  }

  handleSubmit = (data) => {
    this.setState({
      name: data.name,
      address: data.address,
      date: data.date
    });
  }

  render () {
    return (
      <>
      <table>
        <thead>
          <tr>
            <th className="inputTh"><input type='checkbox'/></th>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody id='tableBody'>

        </tbody>
      </table>

      </>
    )
  }
}

export default Table;
  