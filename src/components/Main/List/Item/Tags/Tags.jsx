import style from './Tags.module.css';
import {Tag} from './Tag/Tag'

export const Tags = ({tags}) => {
    return (
        <div className={style.container}>
            {/* {tags.map((tag, index) => <button key={index} className={style.tag}>{tag}</button>)} */}
            {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
        </div>
    )
}