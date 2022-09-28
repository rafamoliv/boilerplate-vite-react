import PropTypes from 'prop-types'

import * as S from './Button.styles'

const Button = ({ onClick, children, primary }) => {
  return (
    <S.Button data-testid="button" onClick={onClick} primary={primary}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  primary: false
}

Button.propTypes = {
  /** Conteúdo filho */
  children: PropTypes.node,
  /** Evento que dispara o click  */
  onClick: PropTypes.func,
  /** Altera o layout se ele for primary */
  primary: PropTypes.bool
}

export default Button
