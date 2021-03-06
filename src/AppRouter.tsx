import { Router } from '@reach/router'
import * as React from 'react'
import Home from './pages/home/home'
import Admin from './pages/admin/admin'

const routers: Array<[string, React.FC<any> | typeof React.Component]> = [
  ['/', Home],
  ['/admin', Admin],
]

export default function AppRouter() {
  return (
    <Router basepath={'/'}>
      {routers.map((route, idx) => {
        const [path, Page] = route as any
        console.log('path   ', path)
        return <Page path={path} key={idx} />
      })}
    </Router>
  )
}
