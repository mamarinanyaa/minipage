import style from './Toolbar.module.css'
import { SortControls } from "./SortControls/SortControls"
import { TagControls } from "./TagControls/TagControls"
import { TagDropdown } from './TagDropdown/TagDropdown'
import { useState } from 'react'

export const Toolbar = () => {
    const [isDropdown, setDropdown] = useState(false);

    const toggleDropDown = () =>{
        setDropdown(!isDropdown)
    }

    return (
        <div className={style.toolbar}>
            <div className={style.container}>
                <SortControls/>
                <TagControls isDropdown={isDropdown} setDropdown={setDropdown}/>
            </div>

            {isDropdown && <TagDropdown toggleDropDown={toggleDropDown}/>}
            
        </div>
        
    )
}