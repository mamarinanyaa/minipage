import style from './Filters.module.css'
import { FilterButton } from './FilterButton/FilterButton'
import { useEffect, useState } from 'react';

export const Filters = () => {
    const [activeFilter, setActiveFilter] = useState();
    const values = ['price', 'author', 'date'];

    return (
        <div className={style.container}>
            {values.map((value,i)=><FilterButton key={i} id={i} activeFilter={activeFilter} setActiveFilter={setActiveFilter} className={style.btn}>{value}</FilterButton>)}
        </div>
    )
}