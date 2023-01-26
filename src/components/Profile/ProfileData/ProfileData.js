import s from './ProfileData.module.css'
const ProfileData = () => {
	return (
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
	)
}

export default ProfileData