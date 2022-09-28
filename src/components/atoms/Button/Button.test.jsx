import i18next from 'i18next'
import { expect, it, vi } from 'vitest'

import { queryByTestId, render, screen, userEvent } from '@/utils/tests'

import { Button } from '.'

const props = {
  onTooggle: vi.fn(),
  children: i18next.t('translation:foo')
}

describe('<Button />', () => {
  describe('Component Render', () => {
    it('render element', () => {
      const { container } = render(<Button {...props} />)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('Events', () => {
    it('Click and show element', async () => {
      render(<Button {...props} />)
      const button = screen.getByRole('button')
      await userEvent.click(button)

      const content = screen.getByText(props.children)
      expect(content).toBeInTheDocument()
    })
  })

  describe('Translate', () => {
    it('Check text translation', async () => {
      const { container } = render(<Button {...props} />)
      expect(queryByTestId(container, 'button')).toBeDefined()
      expect(queryByTestId(container, 'button')).toHaveTextContent(
        props.children
      )
    })
  })
})
