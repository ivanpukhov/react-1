import s from './Posts.module.css'
import Post from './Post/Post';
const Posts = () => {
	let postsData = [
		{
			id: 1,
			post: 'Lorem ipsum, dolor sit amet consectetur adipisicing.'
		},
		{
			id: 2,
			post: 'Nisi amet error blanditiis similique, ex nulla.'
		},
		{
			id: 3,
			post: 'Tenetur, ea perferendis dignissimos odio soluta error!'
		},
		{
			id: 4,
			post: 'T'
		},
	]

	let postsElements = postsData.map(p => <Post message={p.post} />)
	return (

		<div className={s.post}>
			<div className={s.post__title}>Posts</div>
			{postsElements}
		</div>
	)
}

export default Posts