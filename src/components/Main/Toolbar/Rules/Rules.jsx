import style from './Rules.module.css'
import {ReactComponent as ArrowTagIconDown} from "./img/arrowtag_down.svg"
import {ReactComponent as ArrowTagIconUp} from "./img/arrowtag_up.svg"

export const Rules = ({isDropdown, setDropdown}) => {

    const handleClick = () => {
        setDropdown(!isDropdown);
    }

    return (
        <div onClick={handleClick} className={style.container}>
            <button  className={style.btn}>
                Tags 
                {isDropdown ? <ArrowTagIconUp width={12} height={12}/> : <ArrowTagIconDown width={12} height={12}/>}
            </button>
            <div>reset rules</div>
        </div>
    )
}