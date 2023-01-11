import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = () => {
	return (
		<div className="app">
			<Header />
			<Nav />
			<div className="app__content">
				<Profile />
			</div>
		</div>
	);
}




export default App;
