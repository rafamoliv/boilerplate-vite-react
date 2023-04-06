import { componentsEn, componentsPtBr } from '@/components'
import { pagesEn, pagesPtBr } from '@/pages'
import { storeEn, storePtBr } from '@/store'

import { globalPtBr, globalEn } from './globals'

export const defaultLocales = ['en', 'ptbr']

const locales = {
  en: {
    ...globalEn,
    ...pagesEn,
    ...componentsEn,
    ...storeEn
  },
  ptbr: {
    ...globalPtBr,
    ...pagesPtBr,
    ...componentsPtBr,
    ...storePtBr
  }
}

export default locales
