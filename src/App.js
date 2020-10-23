// create your App component here
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({data: data})
        })
    }

    render() {
        return <div>{`${this.state}`}</div>
    }
}

export default App