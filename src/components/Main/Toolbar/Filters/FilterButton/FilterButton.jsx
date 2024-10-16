import style from './FilterButton.module.css'
import { ReactComponent as ArrowIconUp } from './img/arrow_up.svg'
import {ReactComponent as ArrowIconDown} from './img/arrow.svg'
import { useState, useEffect, useContext } from 'react';
import { tagContext } from '../../../../../context/tagContext';

export const FilterButton = ({id, activeFilter, setActiveFilter, className, children}) => {

    const [isActive, setACtive] = useState(false);
    const {setFilterValue} = useContext(tagContext)

    useEffect(()=>{
        
        if (activeFilter !=id) return;

        setFilterValue({
            key: children,
            value: isActive ? 'up' : 'down'
        })
    }, [isActive])

    const handleClick = () => {
        setActiveFilter(id)
        setACtive(!isActive)
    }

    return (
        <button onClick={handleClick} className={id == activeFilter ? className + " " + style.btn_active : className}>{children}{isActive ? <ArrowIconUp/> : <ArrowIconDown/>}</button>
    )
}