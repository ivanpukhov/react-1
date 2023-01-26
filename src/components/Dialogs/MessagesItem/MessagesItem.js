import s from './Dialogs.module.css'
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

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}
const Dialogs = () => {
    let dialogsData = [
        {
            id: 1,
            name: 'Ivan'
        },
        {
            id: 2,
            name: 'Baha'
        },
        {
            id: 3,
            name: 'Kirill'
        },
        {
            id: 4,
            name: 'Nikita'
        },
        {
            id: 5,
            name: 'Andrey '
        },
    ]

    let dialogsElements = dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

    let messages  = [
        {id: 1,message: 'Hi'},
        {id: 2,message: 'Hello'},
        {id: 3,message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque, autem'},
        {id: 4,message: 'Еще одно сообщение'},
    ]
    let messagedElements = messages .map(message=><Message message={message.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagedElements}
            </div>
        </div>
    )
}

export default Dialogs