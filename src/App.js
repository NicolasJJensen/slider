import React, {Component} from 'react'
import './css/App.css'

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            isChecked: true,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      this.setState({ isChecked: !this.state.isChecked })
      console.log()
    }

    render(){
        
        return (
            <label class="switch">
                <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
                <span class="slider round"></span>
            </label>
        )
    }
}

export default App
