import { useEffect } from 'react'
import style from './Rules.module.css'
import {ReactComponent as ArrowTagIconDown} from "./img/arrowtag_down.svg"
import {ReactComponent as ArrowTagIconUp} from "./img/arrowtag_up.svg"

export const Rules = ({isDropdown, setDropdown}) => {

    const handleClick = (e) => {
        e.stopPropagation();
        setDropdown(!isDropdown);
    }

    return (
        <div  className={style.container}>
            <button onClick={(e)=>handleClick(e)} className={style.btn}>
                Tags 
                {isDropdown ? <ArrowTagIconUp width={12} height={12}/> : <ArrowTagIconDown width={12} height={12}/>}
            </button>
            <div>reset rules</div>
        </div>
    )
}