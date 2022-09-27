import Button from './Button'

export default {
  component: Button,
  title: 'Boilerplate/Atoms/Botão',
  parameters: {
    docs: {
      description: {
        component: 'Um componente de botão _markdown_'
      }
    }
  },
  argTypes: {
    onClick: { action: 'onClick' }
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  primary: false,
  children: 'Botão padrão'
}
