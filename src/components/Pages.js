import React from 'react';
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
	return <Info renderData={ABOUT} />;
};

export const Skills = () => {
	return <Info renderData={SKILLS} />;
};

export const Home = () => {
	return <Info renderData={HOME} />;
};

export const NotFound = () => {
	return <Info renderData={NOTFOUND} />;
};
