import Likes from './Likes/Likes'
import s from './Post.module.css'
const Post = (props) => {
	return (
		<div className={s.post__item}>
			{props.message}
			<Likes count={Math.floor(Math.random() * 100)} />

		</div>
	)
}

export default Post