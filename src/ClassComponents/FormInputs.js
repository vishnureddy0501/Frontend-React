import { Component } from "react"

class FormInputs extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'vishnu vardhan',
            address: '',
            language: 'react'
        }
    }

    render () {
        return (
            <>
                <input type="text" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}} />
                <textarea value={this.state.address} onChange={(event) => {this.setState({address: event.target.value})}}></textarea>
                <select value={this.state.language} onChange={(event) => {this.setState({language: event.target.value})}}>
                    <option value="react">React</option>
                    <option value="vue">vue</option>
                    <option value="angular">angular</option>
                </select>
            </>
        )
    }

}
export default FormInputs;