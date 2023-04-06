import Collapse from './Collapse'

export default {
  component: Collapse,
  title: 'Boilerplate/Molecules/Collapse',
  args: {
    children: 'Hello world'
  }
}

const Template = (args) => <Collapse {...args} />

export const Default = Template.bind({})

export const ContentVisible = Template.bind({})
ContentVisible.parameters = {
  docs: {
    description: {
      story: 'Estado com o conteúdo em amostra'
    }
  }
}
ContentVisible.args = {
  toggleContent: false
}
