import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileContent from "./ProfileContent/ProfileContent";
const Profile = () => {
	return (
		<div className={s.profile__block}>
			<ProfileInfo />
			<ProfileContent />

		</div>
	)
}

export default Profile