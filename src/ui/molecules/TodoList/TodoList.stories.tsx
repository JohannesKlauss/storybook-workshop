import {Story} from '@storybook/react';
import TodoList from './TodoList';
import React from "react";
import {withTwoInitialTodos, sbWithRecoil} from "../../../../.storybook/decorators/sbWithRecoil";

export default {
  title: 'molecules/TodoList',
  component: TodoList,
  argTypes: {},
  decorators: [(Story: React.ComponentType) => sbWithRecoil(Story, withTwoInitialTodos)],
};

const Template: Story = args => <TodoList {...args} />;

export const Default = Template.bind({});
export const EmptyList = Template.bind({});

EmptyList.decorators = [(Story: React.ComponentType) => sbWithRecoil(Story)]