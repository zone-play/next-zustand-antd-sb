import HomePage from "../../pages";
import { ComponentStory } from '@storybook/react';
import * as headerStories from '../components/header.desk.stories';

export default {
    title: 'pages',
    component: HomePage
};

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Home = Template.bind({});
Home.args = {
    headTitle: 'Home 首页',
    headDes: '这是一个练手项目',
    headContent: '这个项目通过多种技术栈实现',
    ...headerStories.HeaderDesk.args
};