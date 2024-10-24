import style from './SortControls.module.css'
import { SortOption } from './SortOption/SortOption'
import { useState } from 'react';

export const SortControls = () => {
    const [activeOption, setActiveOption] = useState();
    const values = ['price', 'author', 'date'];

    return (
        <div className={style.container}>
            {values.map((value,i)=><SortOption key={i} id={i} activeOption={activeOption} setActiveOption={setActiveOption} className={style.btn}>{value}</SortOption>)}
        </div>
    )
}