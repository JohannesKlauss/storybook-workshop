import {MutableSnapshot, RecoilRoot} from "recoil";
import * as React from "react";
import {PRIORITY, todoStore} from "../../src/recoil/todoStore";

export function withTwoInitialTodos({set}: MutableSnapshot) {
  set(todoStore.todoIds, ['id1', 'id2']);
  set(todoStore.todo('id1'), {
    label: 'Label 1',
    priority: PRIORITY.LOW,
    isChecked: false,
  })
  set(todoStore.todo('id2'), {
    label: 'Label 2',
    priority: PRIORITY.MID,
    isChecked: false,
  })
}

export function withOneInitialTodo({set}: MutableSnapshot) {
  set(todoStore.todoIds, ['id1']);
  set(todoStore.todo('id2'), {
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