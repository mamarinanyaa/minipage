import { useState, createContext } from "react";

export const tagContext = createContext('');

export const TagnContextProvider = ({children}) => {
    const [filterTags, setFilterTags] = useState([]);

    return (
        <tagContext.Provider value={{filterTags, setFilterTags}}>
            {children}
        </tagContext.Provider>
    )
}