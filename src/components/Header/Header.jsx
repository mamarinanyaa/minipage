import style from './Header.module.css'

export const Header = () => {
    return (
        <div className={style.container}>
            <p className={style.heading}>Book Store</p>
        </div>
    )
}