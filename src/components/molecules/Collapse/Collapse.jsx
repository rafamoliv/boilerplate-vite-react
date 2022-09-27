import PropTypes from 'prop-types'
import { useState } from 'react'

import config from './Collapse.config'
import * as S from './Collapse.styles'

/**
 * Componente collapse
 */
const Collapse = ({ children, onTooggle, toggleContent }) => {
  const [toogleContent, setToggleContent] = useState(toggleContent)

  const handleToggle = () => {
    setToggleContent(!toogleContent)
    onTooggle(toogleContent)
  }

  console.log(config.foo)
  return (
    <S.Wrap>
      <S.Button onClick={handleToggle} primary>
        Mostrar
      </S.Button>
      {!toogleContent && (
        <S.Content>
          <S.Text>{children}</S.Text>
        </S.Content>
      )}
    </S.Wrap>
  )
}

Collapse.defaultProps = {
  toggleContent: true
}

Collapse.propTypes = {
  /** Conteúdo filho */
  children: PropTypes.node,
  /** Evento disparado quando o conteúdo está visível */
  onTooggle: PropTypes.func,
  /** Controle para dizer se o conteúdo está visível */
  toggleContent: PropTypes.bool
}

export default Collapse
