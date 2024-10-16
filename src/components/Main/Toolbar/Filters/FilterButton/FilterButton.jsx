import style from './FilterButton.module.css'
import { ReactComponent as ArrowIconUp } from './img/arrow_up.svg'
import {ReactComponent as ArrowIconDown} from './img/arrow.svg'
import { useState, useEffect, useContext } from 'react';
import { tagContext } from '../../../../../context/tagContext';

export const FilterButton = ({id, activeFilter, setActiveFilter, className, children}) => {

    const [direction, setDirection] = useState(false);
    const {filterValue, setFilterValue} = useContext(tagContext)

    useEffect(() => {
        if (filterValue.key == undefined){
            setActiveFilter()
        }
    }, [filterValue])

    useEffect(()=>{
        
        if (activeFilter != id) return;

        setFilterValue({
            key: children,
            value: direction ? 'up' : 'down'
        })

    }, [direction])

    const handleClick = () => {
        setActiveFilter(id)
        setDirection(!direction)
    }

    return (
        <button onClick={handleClick} className={id == activeFilter ? className + " " + style.btn_active : className}>{children}{direction ? <ArrowIconUp/> : <ArrowIconDown/>}</button>
    )
}