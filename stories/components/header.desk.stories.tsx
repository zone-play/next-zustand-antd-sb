import { HeaderDeskComponent } from "../../components/header.component/header.desk";
import { ComponentStory } from '@storybook/react';
import * as LogoStories from './logo.stories';


export default {
    title: 'components',
    component: HeaderDeskComponent
};

const Template: ComponentStory<typeof HeaderDeskComponent> = (args) => <HeaderDeskComponent {...args} />;

export const HeaderDesk = Template.bind({});
HeaderDesk.args = {
    ...LogoStories.Logo.args
};