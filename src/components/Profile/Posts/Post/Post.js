import Likes from './Likes/Likes'
import s from './Post.module.css'
const Post = (props) => {
	return (
		<div className={s.post__item}>
			{props.message}
			<Likes  />

		</div>
	)
}

export default Post