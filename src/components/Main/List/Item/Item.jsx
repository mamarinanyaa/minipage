import style from './Item.module.css';
import { Content } from './Content/Content';
import { Tags } from './Tags/Tags';

export const Item = ({data}) => {
    const {title, author, date, price, tags} = data
    return (
        <li className={style.container}>
            <Content title={title} author={author} date={date} price={price} />
            <Tags tags={tags}/>
        </li>
    )
}