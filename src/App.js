// create your App component here
import React from 'react'

class App extends React.Component {

 state={

     pepolelist: []
 }


render(){

return(
    <div>{this.state.pepolelist.map(person=>person.name)}</div>
)

}

componentDidMount(){

    fetch('http://api.open-notify.org/astros.json')
    .then(res=>res.json())
    .then(data=> this.setState({
        pepolelist: data.people
    }))

}

}


export default App