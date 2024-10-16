import { useState, createContext } from "react";

export const tagContext = createContext('');

export const TagContextProvider = ({children}) => {
    const [filterTags, setFilterTags] = useState([]);
    const [filterValue, setFilterValue] = useState({});

    return (
        <tagContext.Provider value={{filterTags, setFilterTags, filterValue, setFilterValue}}>
            {children}
        </tagContext.Provider>
    )
}