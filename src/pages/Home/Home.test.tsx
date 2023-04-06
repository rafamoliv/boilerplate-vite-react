import { screen } from '@testing-library/react'

import { render } from '@/utils/tests'

import Home from './Home'

it('should test', () => {
  render(<Home />)
  expect(
    screen.getByRole('heading', { name: 'Boilerplate Vite + React' })
  ).toMatchSnapshot()
})
