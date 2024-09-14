import { createContext, useContext, useState } from "react";

// Create the Context
const StoreContext = createContext();

// Custom hook to use the StoreContext
export const useStore = () => useContext(StoreContext);

// Context Provider
export const StoreProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: "John Doe", age: 25 });
  const [theme, setTheme] = useState("light");
  const [postsList, setPostsList] = useState([{id: '100', name: 'my post 1', description: 'Using negative values doesn’t make a ton of sense with the letter-spacing scale Tailwind includes out of the box, but if you’ve opted to customize your letter-spacing scale to use numbers instead of descriptive words like “wide” the negative value modifier can be useful.'},
         {id: '101', name: 'my post 2', description: 'Using negative values doesn’t make a ton of sense with the letter-spacing scale Tailwind includes out of the box, but if you’ve opted to customize your letter-spacing scale to use numbers instead of descriptive words like “wide” the negative value modifier can be useful.'}])

  const store = {
    userData,
    setUserData,
    theme,
    setTheme,
    postsList,
    setPostsList
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};
