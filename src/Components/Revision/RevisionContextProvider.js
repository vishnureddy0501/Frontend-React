import { useContext, createContext, useState } from "react";

const revisionContext = createContext();
export const useRevisionContext = () => useContext(revisionContext);
const RevisionContextProvider = ({children}) => {
    const [name, setName] = useState("vishnu reddy");
    const [age, setAge] = useState(20);
    const store = {
        name,
        age,
        setAge,
        setName
    }
    return (
        <revisionContext.Provider value={store}>
            {children}
        </revisionContext.Provider>
    )
}
export default RevisionContextProvider;