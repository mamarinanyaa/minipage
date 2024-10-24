import style from './SortOption.module.css'
import { ReactComponent as ArrowIconUp } from './img/arrow_up.svg'
import {ReactComponent as ArrowIconDown} from './img/arrow.svg'
import { useState, useEffect, useContext } from 'react';
import { selectorContext } from '../../../../../context/selectorContext';

export const SortOption = ({id, activeOption, setActiveOption, className, children}) => {

    const [isAscending, setIsAscending] = useState(false);
    const {selectorOption, setSelectorOption} = useContext(selectorContext)

    useEffect(() => {
        if (selectorOption.key === undefined){
            setActiveOption()
            setIsAscending(false)
        }
    }, [selectorOption])

    useEffect(()=>{
        
        if (activeOption != id) return;

        setSelectorOption({
            key: children,
            value: isAscending ? 'up' : 'down'
        })

    }, [isAscending])

    const handleClick = () => {
        setActiveOption(id)
        setIsAscending(!isAscending)
    }

    return (
        <button onClick={handleClick} className={`${className} ${id === activeOption ? style.btn_active : ''}`}>{children}{isAscending ? <ArrowIconUp/> : <ArrowIconDown/>}</button>
    )
}