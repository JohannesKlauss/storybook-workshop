import {render, screen} from '@testing-library/react'
import Header from './Header';

test('Should render header title', () => {
  render(<Header/>);
})