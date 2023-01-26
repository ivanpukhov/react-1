import s from './ProfileContent.module.css'
import ProfileData from "../ProfileData/ProfileData";
import AddPost from "../AddPost/AddPost";
import Posts from "../Posts/Posts";
const ProfileContent = () => {
	return (
		<div className={s.profile__content}>
			<div className={s.profile__left}>
				<ProfileData />
				<AddPost />
			</div>

			<Posts />
		</div>
	)
}

export default ProfileContent