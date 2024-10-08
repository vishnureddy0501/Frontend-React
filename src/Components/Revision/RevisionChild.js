import { memo, useEffect } from "react";
import {useRevisionContext} from "./RevisionContextProvider"
import { useReducer, useRef, useMemo } from "react";
import useFetch from "./CustomHook";

const factorialOperation = (val) => {
    // lets assume this is a complex operation.
    console.log("factorial called");
    return val * 100;
}

// these are default values for props
const RevisionChild = ({ name = "vishnu", age = 20, methodAsProp}) => {
    const revisionContext = useRevisionContext();
    const { isAdmin, setIsAdmin } = useFetch('https://jsonplaceholder.typicode.com/users/');
    console.log(isAdmin);
    const inputRef = useRef(null);
    const {name: nameFromStore, setName: setNameFromStrore, age: ageFromStore, setAge: setAgeFromStore} = revisionContext;
    const handleClick = () => {
        setNameFromStrore("sneha latha");
        setAgeFromStore(22);
        dispatch({ type: 'changeEmployee', employee: 'rishi kumar'})
        methodAsProp("hello from child");
    }

    const initialState = {
        employee: '',
        age: 22,
        company: 'aviso',
        teams: ['Frontend', 'Backend', 'Professional Services']
    }
    const reducer = (reducerStore, payload) => {
        if (payload.type === 'changeEmployee') {
            return {
                ...reducerStore,
                employee: payload.employee
            }
        }
        return reducerStore;
    }

    useEffect(()=> {
        inputRef.current.focus();
    }, [])

    const [reducerStore, dispatch] = useReducer(reducer, initialState);

    const getFactorialValue = useMemo(() => {
        console.log(factorialOperation(reducerStore.age));
        return factorialOperation(reducerStore.age);
    }, [reducerStore.age])
    return (
        <>
            <div>
                {name}, {age}, {getFactorialValue}
            </div>
            <div>from Store: {nameFromStore}, {ageFromStore} </div>
            <input type="text" className=" border-2" ref={inputRef}/>
            { reducerStore.employee && (
                <>
                    <div>from useReducer: {reducerStore.employee}, {reducerStore.age}, {reducerStore.company}</div>
                    {
                        reducerStore.teams.map((item) =>(
                            <div key={item}>
                                <div>
                                    {item}
                                </div>
                            </div>
                        ))
                    }
                </>
            )}
            <div className="button" onClick={handleClick}>Click To Change</div>
        </>
    )
}
// this memo ensures that the component is rendered only if the props changes.
export default memo(RevisionChild);