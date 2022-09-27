import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components'
import { setSignout } from '@/store/Auth'
import { setInitialSetting } from '@/store/InitialSettings'

import { Card, Container, Docs, Logo } from './Home.styles'

import { reactLogo } from '@/assets/icons'
import { useFetchReposQuery } from '@/services/api'

const Home = () => {
  const dispatch = useDispatch()
  const { isInitialized, changeResult } = useSelector(
    (state) => state.initialSetting
  )
  const { data = [] } = useFetchReposQuery()
  const [count, setCount] = useState(0)
  console.log('changeResult', changeResult)
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

      <h1>Boilerplate Vite + React</h1>

      <Docs>Click on the Vite and React logos to learn more</Docs>

      <Card>
        <Button onClick={() => setCount((count) => count + 1)} primary>
          Hook count is {count}
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
          Launch redux
        </Button>
        <Button onClick={() => dispatch(setSignout())}>SIGN OUT</Button>
      </div>

      <div>
        <p>
          <strong>Call redux: </strong>
        </p>
        {data?.map((x, i) => {
          return <p key={i}>{x.name}</p>
        })}
      </div>
    </Container>
  )
}
export default Home
