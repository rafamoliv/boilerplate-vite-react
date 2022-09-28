import { buttonEn, buttonPtBr } from './atoms'
import { collapseEn, collapsePtBr } from './molecules'

const componentsEn = {
  ...collapseEn,
  ...buttonEn
}

const componentsPtBr = {
  ...collapsePtBr,
  ...buttonPtBr
}

export { componentsEn, componentsPtBr }
