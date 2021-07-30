import {MutableSnapshot, RecoilRoot} from "recoil";
import * as React from "react";
import {PRIORITY, todoStore} from "../../src/recoil/todoStore";

export function withTwoInitialTodos({set}: MutableSnapshot) {
  set(todoStore.todoIds, [0, 1]);
  set(todoStore.todo(0), {
    label: 'Label 1',
    priority: PRIORITY.LOW,
    isChecked: false,
  })
  set(todoStore.todo(1), {
    label: 'Label 2',
    priority: PRIORITY.MID,
    isChecked: false,
  })
}

export function withOneInitialTodo({set}: MutableSnapshot) {
  set(todoStore.todoIds, [0]);
  set(todoStore.todo(0), {
    label: 'Label 1',
    priority: PRIORITY.LOW,
    isChecked: false,
  })
}

export function sbWithRecoil(Story: React.ComponentType, initializeState?: (mutableSnapshot: MutableSnapshot) => void) {
  return (
    <RecoilRoot initializeState={initializeState}>
      <Story/>
    </RecoilRoot>
  )
}