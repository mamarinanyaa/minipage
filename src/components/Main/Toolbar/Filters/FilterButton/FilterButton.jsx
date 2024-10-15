import style from './FilterButton.module.css'
import { ReactComponent as ArrowIconUp } from './img/arrow_up.svg'
import {ReactComponent as ArrowIconDown} from './img/arrow.svg'
import { useState } from 'react';

export const FilterButton = ({id, activeFilter, setActiveFilter, className, children}) => {

    const [isActive, setACtive] = useState(false);
    const activeClassName = className + " " + style.btn_active;

    const handleClick = () => {
        setActiveFilter(id)
        setACtive(!isActive)
    }

    return (
        <button onClick={handleClick} className={id == activeFilter ? activeClassName : className}>{children}{isActive ? <ArrowIconUp/> : <ArrowIconDown/>}</button>
    )
}