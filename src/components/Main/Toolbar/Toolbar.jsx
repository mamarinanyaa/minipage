import style from './Toolbar.module.css'
import { Filters } from "./Filters/Filters"
import { Rules } from "./Rules/Rules"
import { TagDropdown } from './TagDropdown/TagDropdown'
import { useState } from 'react'

export const Toolbar = () => {
    const [isDropdown, setDropdown] = useState(false);

    const closeDropDown = () =>{
        // console.log('handle');
        setDropdown(!isDropdown)
    }

    return (
        <div className={style.toolbar}>
            <div className={style.container}>
                <Filters values={['price', 'author', 'date']}/>
                <Rules isDropdown={isDropdown} setDropdown={setDropdown}/>
            </div>

            {isDropdown && <TagDropdown closeDropDown={closeDropDown}/>}
            
        </div>
        
    )
}