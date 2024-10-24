import { useEffect, useState } from 'react';
import style from './TotalPrice.module.css';

export const TotalPrice = ({list}) => {
    const [price, setPrice] = useState(0);
    // console.log(list);
    
    useEffect(()=>{
        const total = list.reduce((acc, item) => acc + item.price, 0);
        setPrice(total);
    }, [list]);

    return (
        <div className={style.container}>
            <span className={style.total}>Total</span>
            <span>: {price}$</span>
        </div>
        
    )
}