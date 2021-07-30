import {Story} from '@storybook/react';
import EmptyListIndicator from './EmptyListIndicator';

export default {
  title: 'atoms/EmptyListIndicator',
  component: EmptyListIndicator,
  argTypes: {},
};

const Template: Story = args => <EmptyListIndicator {...args} />;

export const Default = Template.bind({});