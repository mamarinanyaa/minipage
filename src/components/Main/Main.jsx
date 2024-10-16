import style from './Main.module.css'
import { Toolbar } from "./Toolbar/Toolbar"
import {List} from "./List/List"
import { TagContextProvider } from '../../context/tagContext'

export const Main = () => {
    return (
        <TagContextProvider>
            <div className={style.container}>
                <Toolbar />
                <List />
            </div>
        </TagContextProvider>
    )
}