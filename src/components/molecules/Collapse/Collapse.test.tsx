import { expect, it, vi } from 'vitest'

import { render, screen, userEvent } from '@/utils/tests'

import { Collapse } from '.'

const props = {
  onTooggle: vi.fn(),
  children: 'Olá mundo'
}

describe('<Collapse />', () => {
  describe('Component Render', () => {
    it('render element', () => {
      const { container } = render(<Collapse {...props} />)
      const button = screen.getByRole('button', '/Mostrar/i')
      expect(button).toBeInTheDocument()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('Events', () => {
    it('Click and show element', async () => {
      render(<Collapse {...props} />)
      const button = screen.getByRole('button', '/Mostrar/i')
      await userEvent.click(button)

      const content = screen.getByText(props.children)
      expect(content).toBeInTheDocument()
    })
  })
})
