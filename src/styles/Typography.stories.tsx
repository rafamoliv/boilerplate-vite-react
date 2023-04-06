import { theme as configTheme } from './theme'

const SystemTypography = () => {
  const fontSizesList = Object.entries(configTheme.font.sizes).reduce(
    (totalValue, currentValue) => {
      return [
        ...totalValue,
        {
          prefix: currentValue[0],
          size: currentValue[1]
        }
      ]
    },
    []
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {fontSizesList.map((font) => {
        return (
          <div key={font.prefix}>
            <p style={{ fontSize: font.size }}>Roboto - Lorem ipsum</p>
            <p>
              <code>
                Prefixo: {font.prefix} - Tamanho: {font.size}
              </code>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default {
  title: 'Design/Tokens/Tipografia'
}

const Theme = (args) => <SystemTypography {...args} />

export const Default = Theme.bind({})
