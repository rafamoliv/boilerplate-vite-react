import * as React from 'react'

import * as S from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	onClick: any;
	primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, primary }) => {
  return (
    <S.Button data-testid="button" onClick={onClick} primary={primary}>
      {children}
    </S.Button>
  )
}

export default Button
