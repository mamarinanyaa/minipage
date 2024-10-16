import { useEffect, useState } from 'react'
import style from './Content.module.css'

export const Content = ({title, author, date, price}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <ul>
                <li>by {author}</li>
                <li>{date}</li>
                <li>{price}</li>
            </ul>
        </div>
    )
}