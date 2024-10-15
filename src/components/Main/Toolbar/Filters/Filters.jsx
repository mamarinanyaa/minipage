import style from './Filters.module.css'
import { FilterButton } from './FilterButton/FilterButton'
import { useState } from 'react';

export const Filters = ({values}) => {
    const [activeFilter, setActiveFilter] = useState()
    return (
        <div className={style.container}>
            {values.map((value,i)=><FilterButton key={i} id={i} activeFilter={activeFilter} setActiveFilter={setActiveFilter} className={style.btn}>{value}</FilterButton>)}
        </div>
    )
}