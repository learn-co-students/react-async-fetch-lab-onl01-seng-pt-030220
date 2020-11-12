// create your App component here

import React, {component, Component} from 'react' 

class App extends Component{

    constructor(){
    super()
    
    this.state ={
    peopleInSpace:[]
    }
}   

    

    componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {this.setState({
        peopleInSpace:data.people
    })})
    .then(console.log(this.state.peopleInSpace))
    }

    render(){
    return(
    <div> 
        <p> testing</p>
    </div>
    )}

}

export default App
