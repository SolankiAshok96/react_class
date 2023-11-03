import React, { Component } from 'react';

export default class APIFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false, 
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    console.log(items);

    if (!DataisLoaded) {
      return (
        <div>
          <h1>Please wait some time.....</h1>
        </div>
      );
    }

    return (
      <div className='app'>
        <h1 className='heading'>User Data</h1>
        <h3 className='heading'>Fetch data from an API in React</h3>
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th>User_name</th>
                <th>Full_name</th>
                <th>User Email</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
