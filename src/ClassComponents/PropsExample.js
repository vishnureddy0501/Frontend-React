import React, { Component } from "react"

class PropsExample extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'vishnu vardhan reddy',
            age: 22
        }
    }
    // always use arrow functions only.
    increment = () => {
        /*
            if you want to update the state of class component. you must update it by using setState only.
            setStae has 2 arguments.
             1. value that you want to update
             2. after updating the value, if you want to execute some code then place it in 2nd argument.
        */
        // Standard syntax for updating the class state. (blindly remember)
        this.setState((previousState, props) => (
            {
                age: previousState.age + 1
            }
        ), () => {
            console.log("updated age", this.state.age);

        })
        console.log('age', this.state.age); // this line is executed synchronously, Hence state updates are not reflected here.
    }
    render () {
        // console.log(this.props); // no need to pass props as argument to render.
        return (
            <div>
                <div>
                    PropsExample { this.props.name }{ this.props.age}
                </div>
                <div>
                    stateExample { this.state.name }{ this.state.age}
                </div>
                <div className=" px-2 py-2 bg-white border-cyan-200 border-2" onClick={()=>{ this.increment() }}>Change State</div>
            </div>
        )
    }
}
export default PropsExample;

/*
    Props are immutable. means you can't change them
*/