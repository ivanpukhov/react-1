import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
	return (
		<div className={s.profile}>
			<div className={s.profile__back}>
				<img src="https://www.symposiamorphologica.com/images/rotazione/praga.jpg" alt="" />
			</div>
			<div className={s.profile__img}>
				<img src="https://www.sevenconsulting.com/wp-content/uploads/2020/03/Placeholder-MALE.png" alt="" />
			</div>
			<div className={s.profile__name}>
				Ivan Pukhov
			</div>
		</div>
	)
}

export default ProfileInfo