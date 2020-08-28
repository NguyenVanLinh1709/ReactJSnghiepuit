import React from 'react';
import './App.css';

class App extends React.Component {

    showInfoProduct(p) {
        if (p.status) {
            return (
                <h3>
                    id : {p.id} <br />
          name : {p.name} <br />
          price : {p.price} <br />
          status : {p.status ? 'Active' : 'Pending'}
                </h3>
            )
        }
        else {
            return (<h3>Your status is {p.status ? 'true' : 'false'}</h3>);
        }
    }

    render() {
        var product = {
            id: 1,
            name: 'iphone',
            price: 1000,
            status: true,
        }

        var user = [
            {
                id: 1,
                name: 'Apple',
                age: 20
            },
            {
                id: 2,
                name: 'Google',
                age: 25
            },
            {
                id: 3,
                name: 'Chrome',
                age: 22
            }
        ]

        var elements = user.map((user, index) => {
            return (
                <div key={index}>
                    <h3>Name : {user.name}</h3>
                    <h4>Age : {user.age}</h4>
                    <h4>Index : {index}</h4>
                </div>
            )
        })

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="https://www.google.com/">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com/">Disabled</a>
                    </li>
                </ul>
                <div className="ml-30">
                    {this.showInfoProduct(product)}
                </div>
                <hr></hr>
                <div className="ml-30">
                    {elements}
                </div>
            </div>
        );
    }
}

export default App;
