import style from './TagDropdown.module.css'
import { Tag } from '../../List/Item/Tags/Tag/Tag'
import tags from "./tags.json"
import { useEffect, useRef, useContext } from 'react';
import { tagContext } from '../../../../context/tagContext';

export const TagDropdown = ({closeDropDown}) => {
    const tagsRef = useRef(null);
    const {filterTags} = useContext(tagContext);

    const handleClick = (e) => {
        if (tagsRef.current && !tagsRef.current.contains(e.target) && e.target.tagName!=='svg'){
            closeDropDown();
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
            {tags.tags.map((tag, index) => <Tag key={index} isActiveTag={filterTags.includes(tag)}>{tag}</Tag>)}
        </div>
    )
}