import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                <NavLink to="/dialogs/2"><div className={s.dialog}>Baha</div></NavLink>
                <NavLink to="/dialogs/3"><div className={s.dialog}>Kirill</div></NavLink>
                <NavLink to="/dialogs/4"><div className={s.dialog}>Nikita</div></NavLink>
                <NavLink to="/dialogs/5"><div className={s.dialog}>Andrey</div></NavLink>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message_from}>Hello</div>
                <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque, autem, distinctio dolores eveniet illo ipsam iure iusto magni natus neque nesciunt nobis odit officia optio quae sed, ullam voluptatem. Doloribus dolorum illo ipsa officiis perferendis porro quidem sint, tempora!</div>
                <div className={s.message_from}>Whats Up!</div>
                <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, esse!</div>
            </div>
        </div>
    )
}

export default Dialogs