import { useState, createContext } from "react";

export const selectorContext = createContext('');

export const SelectorContextProvider = ({children}) => {
    const [selectorTags, setSelectorTags] = useState([]);
    const [selectorOption, setSelectorOption] = useState({});

    return (
        <selectorContext.Provider value={{selectorTags, setSelectorTags, selectorOption, setSelectorOption}}>
            {children}
        </selectorContext.Provider>
    )
}