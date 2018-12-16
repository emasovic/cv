import React from 'react';
import hitman1 from '../images/hitman1.png';
import hitman2 from '../images/hitman2.png';
import hitman3 from '../images/hitman4.png';
import hitman4 from '../images/hitman5.png';
import {
	personalData,
	experience,
	education,
	fEndTech,
	bEndTech,
	intro,
	notFound,
} from './info/data';
import Info from './info/Info';

const ABOUT = [
	{
		title: 'INFO',
		data: personalData,
	},
	{
		title: 'EXPERIENCE',
		data: experience,
	},
	{
		title: 'EDUCATION',
		data: education,
	},
];

const SKILLS = [
	{
		title: 'FRONT-END',
		data: fEndTech,
	},
	{
		title: 'BACK-END',
		data: bEndTech,
	},
];

const HOME = [
	{
		title: 'WELCOME',
		data: intro,
	},
];

const NOTFOUND = [
	{
		title: 'NOT FOUND',
		data: notFound,
	},
];

export const About = () => {
	return <Info renderData={ABOUT} img={hitman1} />;
};

export const Skills = () => {
	return <Info renderData={SKILLS} img={hitman2} />;
};

export const Home = () => {
	return <Info renderData={HOME} img={hitman3} />;
};

export const NotFound = () => {
	return <Info renderData={NOTFOUND} img={hitman4} />;
};
