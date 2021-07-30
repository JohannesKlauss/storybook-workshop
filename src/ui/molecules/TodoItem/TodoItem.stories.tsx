import {Story} from '@storybook/react';
import TodoItem, {TodoItemProps} from './TodoItem';

export default {
  title: 'Molecules/TodoItem',
  component: TodoItem,
  argTypes: {},
};

const Template: Story<TodoItemProps> = args => <TodoItem {...args} />;

export const Default = Template.bind({});