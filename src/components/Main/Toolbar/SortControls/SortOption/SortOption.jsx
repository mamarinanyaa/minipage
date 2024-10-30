import style from './SortOption.module.css'
import { ReactComponent as ArrowIconUp } from './img/arrow_up.svg'
import {ReactComponent as ArrowIconDown} from './img/arrow.svg'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorOptionChange } from '../../../../../store/selector/action';

export const SortOption = ({id, activeOption, setActiveOption, className, children}) => {

    const [isAscending, setIsAscending] = useState(false);
    const selectorOption = useSelector(state => state.selectorReducer.selectorOption);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectorOption.key === undefined){
            setActiveOption()
            setIsAscending(false)
        }
    }, [selectorOption])

    useEffect(()=>{
        
        if (activeOption != id) return;

        dispatch(selectorOptionChange({
            key: children,
            value: isAscending ? 'up' : 'down'
        }));

    }, [isAscending])

    const handleClick = () => {
        setActiveOption(id)
        setIsAscending(!isAscending)
    }

    return (
        <button onClick={handleClick} className={`${className} ${id === activeOption ? style.btn_active : ''}`}>{children}{isAscending ? <ArrowIconUp/> : <ArrowIconDown/>}</button>
    )
}