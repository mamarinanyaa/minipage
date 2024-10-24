import { useContext } from 'react'
import style from './TagControls.module.css'
import {ReactComponent as ArrowTagIconDown} from "./img/arrowtag_down.svg"
import {ReactComponent as ArrowTagIconUp} from "./img/arrowtag_up.svg"
import { selectorContext } from '../../../../context/selectorContext'

export const TagControls = ({isDropdown, setDropdown}) => {

    const {setSelectorTags, setSelectorOption} = useContext(selectorContext);

    const handleClick = (e) => {
        e.stopPropagation();
        setDropdown(!isDropdown);
    }

    return (
        <div  className={style.container}>
            <button onClick={handleClick} className={style.btn}>
                Tags 
                {isDropdown ? <ArrowTagIconUp width={12} height={12}/> : <ArrowTagIconDown width={12} height={12}/>}
            </button>

            <button onClick={()=>{
                setSelectorTags([]);
                setSelectorOption({});
            }} className={style.reset}>
                reset rules
            </button>
        </div>
    )
}