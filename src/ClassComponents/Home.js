import React, { Component } from "react"
import PropsExample from "./PropsExample"
import FormInputs from "./FormInputs";

class Home extends Component {
    render () {
        return (
            <div>
                <div>
                    Example of Class Component
                </div>
                {/* <PropsExample name="vishnu" age="20" /> */}
                <FormInputs />
            </div>
        )
    }
}
export default Home;