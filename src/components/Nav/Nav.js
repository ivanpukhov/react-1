import s from './Nav.module.css'
import {Link, NavLink} from "react-router-dom";

let activeLink = s.active__link
let active = ({ isActive }) => isActive ? s.active : undefined

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <NavLink to="/profile" className={active}>
                    <li>Profile</li>
                </NavLink>
                <NavLink to="/dialogs/" className={active}>
                    <li>Message</li>
                </NavLink>
                <NavLink to="/news" className={active}>
                    <li>News</li>
                </NavLink>
                <NavLink to="/music" className={active}>
                    <li>Music</li>
                </NavLink>
                <NavLink to="/settings" className={active}>
                    <li>Settings</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav