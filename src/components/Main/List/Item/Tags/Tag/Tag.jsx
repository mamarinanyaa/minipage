import { useContext, useEffect, useState } from 'react';
import style from './Tag.module.css';
import { tagContext } from '../../../../../../context/tagContext';

export const Tag = ({isActiveTag, children}) => {
    const [isClicked, setClicked] = useState(isActiveTag);
    const {filterTags, setFilterTags} = useContext(tagContext);

    const handleClick = () => {
        setClicked(!isClicked)
    };

    useEffect(() => {
        if (isClicked && !filterTags.includes(children))
            setFilterTags([...filterTags, children]) 
        else if (!isClicked){
            setFilterTags(filterTags.filter(el => el!=children))
        }
    }, [isClicked])

    return (
        <button onClick={handleClick} className={isClicked ? style.tag + ' ' + style.active : style.tag}>{children}</button>
    )
}