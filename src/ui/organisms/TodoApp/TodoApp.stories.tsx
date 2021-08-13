import {Story} from '@storybook/react';
import TodoApp from './TodoApp';
import {sbWithRecoil, withTwoInitialTodos} from "../../../../.storybook/decorators/sbWithRecoil";

export default {
  title: 'Organisms/TodoApp',
  component: TodoApp,
  argTypes: {},
};

const Template: Story = args => <TodoApp {...args} />;

export const Default = Template.bind({});
export const WithTodos = Template.bind({});

WithTodos.decorators = [Story => sbWithRecoil(Story, withTwoInitialTodos)]