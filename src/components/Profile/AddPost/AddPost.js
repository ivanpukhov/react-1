import s from './AddPost.module.css'

const AddPost = () => {
	return (
		<div className={s.post__new}>
			<textarea className={s.post__new_add} placeholder="Add new post" id=""></textarea> <br />
			<input type="submit" value="Add post" />
		</div>
	)
}

export default AddPost