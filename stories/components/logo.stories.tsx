import { LogoComponent } from "../../components/logo.component";
import { ComponentStory } from '@storybook/react';


export default {
    title: 'components',
    component: LogoComponent
};

const Template: ComponentStory<typeof LogoComponent> = (args) => <LogoComponent {...args} />;

export const Logo = Template.bind({});
Logo.args = {
    logoAlt: 'Logo',
    logoWidth: 128,
    logoHeight: 50
}