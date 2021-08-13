import {Story} from '@storybook/react';
import CreateTodoDialog, {CreateTodoDialogProps} from './CreateTodoDialog';
import React from "react";

export default {
  title: 'molecules/CreateTodoDialog',
  component: CreateTodoDialog,
  argTypes: {
    isOpen: {control: {type: 'boolean'}}
  },
  args: {
    isOpen: true,
  }
};

const Template: Story<CreateTodoDialogProps> = args => <CreateTodoDialog {...args} />;

export const Default = Template.bind({});