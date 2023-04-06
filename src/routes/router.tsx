import i18next from 'i18next'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom'

import { setSignin } from '@/store/Auth'

import { privateURL, publicURL } from './urls'
import { useAppSelector } from '@/utils/hooks'

// pages
const Home = React.lazy(() => import('@/pages/Home'))

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user }) => {
  if (user) {
    return <Outlet />
  }

  return <Navigate to={publicURL.SIGNIN} />
}

// eslint-disable-next-line react/prop-types
const Signin = ({ onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <h3>{i18next.t('globalText:sign') as string}</h3>
      <button onClick={onClick}>
        {i18next.t('globalText:sign', { context: 'btn' }) as string}
      </button>
    </div>
  )
}

const Router = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)

  React.useEffect(() => {
    if (user) {
      navigate(privateURL.HOME)
    } else {
      navigate(publicURL.SIGNIN)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  let routes = useRoutes([
    {
      element: <ProtectedRoute user={user} />,
      children: [
        {
          path: privateURL.HOME,
          element: <Home />
        }
      ]
    },
    {
      path: publicURL.SIGNIN,
      element: <Signin onClick={() => dispatch(setSignin('sign@in.com'))} />
    }
  ])

  return routes
}

export default Router
