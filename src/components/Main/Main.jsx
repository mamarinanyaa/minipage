import style from './Main.module.css'
import { Toolbar } from "./Toolbar/Toolbar"
import {List} from "./List/List"

export const Main = () => {
    return (
        <div className={style.container}>
            <Toolbar />
            <List />
        </div>
    )
}