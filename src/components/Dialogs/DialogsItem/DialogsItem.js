import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path}>
                <div className={s.dialog}>{props.name}  </div>
            </NavLink>
        </div>
    )
}


export default Dialog