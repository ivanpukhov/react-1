import s from './Nav.module.css'

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<a><li>Profile</li></a>
				<a><li>Message</li></a>
				<a><li>News</li></a>
				<a><li>Music </li></a>
				<a><li>Settings</li></a>
			</ul>
		</nav>
	)
}

export default Nav