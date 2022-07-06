import { NavLink } from "react-router-dom"
import s from './AppBar.module.css'


const AppBar = () => {
    return (
        <nav className={s.navContainer}>
        <NavLink exact  className={s.nav} to="/">Home</NavLink >
        <NavLink className={s.nav} to="/movies">Movies</NavLink >
      </nav>
    )
}

export default AppBar;