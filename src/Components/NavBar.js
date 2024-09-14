import './../App.css'
import { useState } from "react";
const LearningReact = () => {
    const [tabs, setTabs] = useState([{name: 'deals', key: 'deals'}, {name: 'forecasts', key: 'forecasts'}]);
    return (
        <div>
            {
                tabs.map(item => (
                    <div key={item.key}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}
export default LearningReact;