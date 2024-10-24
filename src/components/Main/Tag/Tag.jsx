import { useContext, useEffect, useState } from 'react';
import style from './Tag.module.css';
import { selectorContext } from '../../../context/selectorContext';

export const Tag = ({isActiveTag ,nonClicked, children}) => {
    const [isClicked, setClicked] = useState(isActiveTag);
    const {selectorTags, setSelectorTags} = useContext(selectorContext);

    const handleClick = () => {
        // if (nonClicked) return;
        setClicked(!isClicked)
    };

    useEffect(() => {
        // if (nonClicked) return;

        if (isClicked && !selectorTags.includes(children))
            setSelectorTags([...selectorTags, children]) 
        else if (!isClicked){
            setSelectorTags(selectorTags.filter(el => el!=children))
        }
    }, [isClicked])

    return (
        <button onClick={handleClick} className={isClicked ? style.tag + ' ' + style.active : style.tag}>{children}</button>
    )
}