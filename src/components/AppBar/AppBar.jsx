import { NavLink } from "react-router-dom"
import s from './AppBar.module.css'


const AppBar = () => {
    return (
        <nav>
        <NavLink exact='true' activeclassname={s.activeNav}  className={s.nav} to="/">Home</NavLink >
        <NavLink activeclassname={s.activeNav} className={s.nav} to="/movies">Movies</NavLink >
      </nav>
    )
}

export default AppBar;