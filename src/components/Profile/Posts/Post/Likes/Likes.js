import s from './Likes.module.css'
const Likes = (props) => {
	return (
		<div className={s.likes}>
			{props.count}

		</div>
	)
}

export default Likes