import { faArrowLeftLong } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { Button } from '@/components'
import { setSignout } from '@/store/Auth'
import { setInitialSetting } from '@/store/InitialSettings'

import { Card, Container, Docs, Logo } from './Home.styles'

import { reactLogo } from '@/assets/icons'
import { useFetchReposQuery } from '@/services/api'
import { useAppSelector } from '@/utils/hooks'

const Home = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('pgHome')
  const { isInitialized, changeResult } = useAppSelector(
    (state) => state.initialSetting
  )
  const { data = [] } = useFetchReposQuery()
  const [count, setCount] = React.useState(0)

  return (
    <Container>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <Logo alt="Vite logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <Logo alt="React logo" src={reactLogo} />
        </a>
      </div>

      <h1>{t('title')}</h1>
      <FontAwesomeIcon icon={faArrowLeftLong} />
      <Docs>{t('summary')}</Docs>
      <p>{changeResult}</p>

      <Card>
        <Button onClick={() => setCount((count) => count + 1)} primary>
          {t('count', { value: count })}
        </Button>
      </Card>

      <div>
        <Button
          onClick={() => {
            alert(`Clicked! Change isInitialized to: ${!isInitialized}`)
            dispatch(setInitialSetting(!isInitialized))
          }}
          primary
        >
          {t('btn', { context: 'redux' })}
        </Button>
        <Button onClick={() => dispatch(setSignout())}>
          {t('btn', { context: 'signout' })}
        </Button>
      </div>

      <div>
        <p>
          <strong>{t('redux')}</strong>
        </p>
        {data?.map((x, i) => {
          return <p key={i}>{x.name}</p>
        })}
      </div>
    </Container>
  )
}
export default Home
