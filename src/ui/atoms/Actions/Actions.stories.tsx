import {Story} from '@storybook/react';
import Actions, {ActionsProps} from './Actions';

export default {
  title: 'atoms/Actions',
  component: Actions,
  argTypes: {
    itemId: { control: {type: 'number'} }
  },
};

const Template: Story<ActionsProps> = args => <Actions {...args} />;

export const Default = Template.bind({});