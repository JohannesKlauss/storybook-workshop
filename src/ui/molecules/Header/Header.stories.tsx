import {Story} from '@storybook/react';
import Header, {HeaderProps} from './Header';
import {withTwoInitialTodos, sbWithRecoil, withOneInitialTodo} from "../../../../.storybook/decorators/sbWithRecoil";

export default {
  title: 'molecules/Header',
  component: Header,
  argTypes: {
    initialHeading: {
      control: {type: 'text'}
    }
  },
  args: {
    initialHeading: 'Our Todo List'
  }
};

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
export const WithMultipleTodos = Template.bind({});
export const WithOneTodo = Template.bind({});

WithMultipleTodos.decorators = [Story => sbWithRecoil(Story, withTwoInitialTodos)]
WithOneTodo.decorators = [Story => sbWithRecoil(Story, withOneInitialTodo)]