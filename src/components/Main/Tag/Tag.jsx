import { useEffect, useState } from 'react';
import style from './Tag.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorTagsChange } from '../../../store/selector/action';

export const Tag = ({isActiveTag ,nonClicked, children}) => {
    const [isClicked, setClicked] = useState(isActiveTag);
    const selectorTags = useSelector(state => state.selectorReducer.selectorTags);
    const dispatch = useDispatch();

    const handleClick = () => {
        // if (nonClicked) return;
        setClicked(!isClicked)
    };

    useEffect(() => {
        // if (nonClicked) return;

        if (isClicked && !selectorTags.includes(children))
            dispatch(selectorTagsChange([...selectorTags, children]));
        else if (!isClicked){
            dispatch(selectorTagsChange(selectorTags.filter(el => el!=children)));
        }
    }, [isClicked])

    return (
        <button onClick={handleClick} className={isClicked ? style.tag + ' ' + style.active : style.tag}>{children}</button>
    )
}