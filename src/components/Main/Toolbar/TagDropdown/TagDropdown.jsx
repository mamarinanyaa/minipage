import style from './TagDropdown.module.css';
import tags from "./tags.json";
import { useEffect, useRef, useContext } from 'react';
import { selectorContext } from '../../../../context/selectorContext';
import {Tag} from '../../Tag/Tag';

export const TagDropdown = ({toggleDropDown}) => {
    const tagsRef = useRef(null);
    const {selectorTags} = useContext(selectorContext);

    const handleClick = (e) => {
        if (tagsRef.current && !tagsRef.current.contains(e.target) && e.target.tagName!=='svg'){
            toggleDropDown();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <div ref={tagsRef} className={style.container}>
            {tags.tags.map((tag, index) => <Tag key={index} isActiveTag={selectorTags.includes(tag)}>{tag}</Tag>)}
        </div>
    )
}