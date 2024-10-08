import { useCallback, useEffect, useState } from "react";
import RevisionChild from "./RevisionChild";
import RevisionContextProvider from "./RevisionContextProvider"


const Revision = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const handleClick = () => {
        setName("vishnu reddy");
        setAge((previousState) => previousState + 1);
    }
    const methodAsProp = useCallback((value) => {
        console.log(value, "Perform any opearation that you want");
    }, []);
    useEffect(() => {
        // no dependency. This is same as update hook.
    });
    useEffect(() => {
        // same as mounted hook. api calls code goes here
        document.title = "vishnu's App";
    }, [])
    useEffect(() => {
        // like mounted + watcher. on mounted it executes. if the name/age changes then also it executes.
    }, [name, age])
    return (
        <RevisionContextProvider>
            <div>Doing Revision</div>
            <div>{name}, {age}</div>
            <RevisionChild name={name} age={age} methodAsProp={methodAsProp}/>
            <div className="button" onClick={() => {handleClick();}}>Update Data</div>
        </RevisionContextProvider>
    )
};
export default Revision;