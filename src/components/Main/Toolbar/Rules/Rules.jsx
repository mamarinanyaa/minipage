import { useContext, useEffect } from 'react'
import style from './Rules.module.css'
import {ReactComponent as ArrowTagIconDown} from "./img/arrowtag_down.svg"
import {ReactComponent as ArrowTagIconUp} from "./img/arrowtag_up.svg"
import { tagContext } from '../../../../context/tagContext'

export const Rules = ({isDropdown, setDropdown}) => {

    const {setFilterTags, setFilterValue} = useContext(tagContext);

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
            <a onClick={()=>{
                setFilterTags([]);
                setFilterValue({});
            }}><button className={style.reset}>reset rules</button></a>
        </div>
    )
}