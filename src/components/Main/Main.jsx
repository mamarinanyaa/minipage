import style from './Main.module.css'
import { Toolbar } from "./Toolbar/Toolbar"
import {List} from "./List/List"
import { SelectorContextProvider } from '../../context/selectorContext'

export const Main = () => {
    return (
        <SelectorContextProvider>
            <div className={style.container}>
                <Toolbar />
                <List />
            </div>
        </SelectorContextProvider>
    )
}