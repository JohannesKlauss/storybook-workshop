import {Story} from '@storybook/react';
import Todo, {TodoProps} from './Todo';
import {PRIORITY} from "../../../recoil/todoStore";

export default {
  title: 'atoms/Todo',
  component: Todo,
  argTypes: {
    isChecked: {control: {type: 'boolean'}},
    label: {control: {type: 'text'}},
    priority: {
      control: {
        type: 'select',
        labels: {
          [PRIORITY.LOW]: 'Low',
          [PRIORITY.MID]: 'Mid',
          [PRIORITY.HIGH]: 'High'
        }
      }
    }
  },
};

const Template: Story<TodoProps> = args => <Todo {...args} />;

export const Default = Template.bind({});
export const Checked = Template.bind({});

Default.args = {
  label: 'Buy groceries for the weekend',
  priority: PRIORITY.LOW,
}

Checked.args = {
  ...Default.args,
  isChecked: true,
}