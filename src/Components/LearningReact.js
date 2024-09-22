import './../App.css'
import { useState, useEffect } from "react";
const LearningReact = () => {
    const [userData, setUserData] = useState([{name: 'vishnu', age: 20}, {name: 'sneha', age: 20}]);
    const [newUser, setNewUser] = useState({name: '', age: 0});
    const [showErrors, setshowErrors] = useState(false);
    const handleAdduser = () => {
        if (newUser.name && newUser.age) {
            setUserData([...userData, newUser]);
            setNewUser({name: '', age: 0});
            setshowErrors(false);
        } else {
            setshowErrors(true);
        }
    };
    useEffect(()=>{
        // this is just like mounted. ran only once. Use effect executes before dom update.
        console.log("useEffect executed");
    }, [])
    useEffect(()=>{
        // this executes when ever dependency changes. 
        console.log("use effect executed");
    }, [newUser])
    return (
        <div>
            <div className="text-[1rem] text-[#ff6347]">this is my Component</div>
                { 
                    userData.map(item => (
                        <div key={item.name}>
                            { item.name } - { item.age }
                        </div>
                    ))
                }
            <input type="text" placeholder="enter name" value={newUser.name} onChange={(event) => setNewUser({...newUser, name: event.target.value})}/>
            { !newUser.name && showErrors && (<div className="invalid-name">Enter valid name</div>) }
            <input type="number" placeholder="enter age" value={newUser.age} onChange={(event) => setNewUser({...newUser, age: event.target.value})}/>
            { !newUser.age && showErrors && (<div className="invalid-age">Enter Valid age</div>)}
            <div className="button" onClick={() => handleAdduser()}>add new user</div>
        </div>
    )
}
export default LearningReact;