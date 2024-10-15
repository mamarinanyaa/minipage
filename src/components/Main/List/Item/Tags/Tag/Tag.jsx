import style from './Tag.module.css';

export const Tag = ({children}) => {
    return (
        <button className={style.tag}>{children}</button>
    )
}