import style from './Main.module.css'
import { Toolbar } from "./Toolbar/Toolbar"
import {List} from "./List/List"
import { TagnContextProvider } from '../../context/tagContext'

export const Main = () => {
    return (
        <TagnContextProvider>
            <div className={style.container}>
                <Toolbar />
                <List />
            </div>
        </TagnContextProvider>
    )
}