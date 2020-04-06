import {About, Skills, Home} from './Pages';
import Pixelart from './pixelart/Pixelart';

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
		component: About,
	},
	{
		path: PATH + '/skills',
		name: 'Skills',
		component: Skills,
	},
	{
		path: PATH + '/pixelart',
		name: 'Pixel art',
		component: Pixelart,
	},
];
