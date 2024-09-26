// usereducer learning done

import { useReducer } from "react";
const initialState = {
    name: 'vishnu vardhan',
    age: 20,
    profession: 'software'
} 

// state is automatically passed as first argument
const reducer = (store, action) => {
    if(action.type === 'change-user') {
        return {...store, ...action.payload}
    }
    return store;
}
const useReducerExample = () => {
    const [store, dispatch] = useReducer(reducer, initialState); 
    return (
        <>
            <div>{store.name} - {store.age} - {store.profession}</div>

            {/* dispatch accepts only 1 argument */}
            <button onClick={() => {dispatch({type: 'change-user', payload: {name: 'sneha', age: '22'}}); }}>Reducer Example</button>
        </>
    )
};
export default useReducerExample;