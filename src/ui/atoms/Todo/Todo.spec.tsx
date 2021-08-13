import {render, screen} from '@testing-library/react'
import {Checked, Default} from "./Todo.stories";

test('Should be checked if isChecked is true', () => {
  render(<Checked {...Checked.args}/>);

  expect(screen.getByRole('checkbox')).toBeChecked()
})

test('Should be not checked if isChecked is false', () => {
  render(<Default {...Default.args}/>);

  expect(screen.getByRole('checkbox')).not.toBeChecked()
})

test('Should render correct label', () => {
  render(<Default {...Default.args}/>);

  expect(screen.getByText(Default.args?.label!)).toBeInTheDocument()
})