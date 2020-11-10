import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }
    
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    people: result.people
                })            
            }
        )

    }
    
    render() {
        return (
            <div>
                {this.state.people.map((person) => <h1>{person.name}</h1>)}
            </div>
        );
    }
}

export default App;