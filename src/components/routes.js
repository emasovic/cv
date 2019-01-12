import {About, Skills, Home} from './Pages';

const PATH = '/cv';

export default [
	{
		path: PATH,
		name: 'Home',
		component: Home,
	},
	{
		path: PATH + '/about',
		name: 'About',
		component: About
	},
	{
		path: PATH + '/skills',
		name: 'Skills',
		component: Skills
	},
];
