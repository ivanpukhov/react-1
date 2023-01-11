import s from './Profile.module.css'
import Posts from './Posts/Posts';
import AddPost from './AddPost/AddPost';
const Profile = () => {
	return (
		<div className={s.profile__block}>
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
			<div className={s.profile__content}>
				<div className={s.profile__left}>
					<div className={s.info}>
						<div className={s.info__item}>
							<div className={s.info__item_before}>Date of Birdth</div>
							<div className={s.info__item_after}>7 Octomber</div>
						</div>
						<div className={s.info__item}>
							<div className={s.info__item_before}>City</div>
							<div className={s.info__item_after}>Petropavlovsk</div>
						</div>
						<div className={s.info__item}>
							<div className={s.info__item_before}>Education</div>
							<div className={s.info__item_after}>Высший колледж имени Магжана Жумабаева</div>
						</div>
						<div className={s.info__item}>
							<div className={s.info__item_before}>WebSite</div>
							<div className={s.info__item_after}>ivaninbox.site</div>
						</div>
					</div>
					<AddPost />
				</div>

				<Posts />
			</div>
		</div>
	)
}

export default Profile