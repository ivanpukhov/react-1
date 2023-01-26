import s from './Posts.module.css'
import Post from './Post/Post';
const Posts = () => {
	return (
		<div className={s.post}>
			<div className={s.post__title}>Posts</div>
			<Post message="Lorem ipsum, dolor sit amet consectetur adipisicing." />
			<Post message="Nisi amet error blanditiis similique, ex nulla." />
			<Post message="Tenetur, ea perferendis dignissimos odio soluta error!" />
			<Post message="Autem fuga iure harum molestias sapiente. Ullam!" />
		</div>
	)
}

export default Posts