import React, { lazy, Suspense } from 'react'

import './App.css'

import { Sidebar } from './components/Sidebar/Sidebar'
import Content1 from './components/Content1/Content1'

const Content2 = lazy(() => import('./components/Content2/Content2'))
const Content3 = lazy(() => import('./components/Content3/Content3'))

function App () {
  return (
    <div className='App'>
      <aside>
        <Sidebar></Sidebar>
      </aside>
      <main>
        <Content1 id='1' />
        <Suspense>
          <Content2 id='2' />
          <Content3 id='3' />
        </Suspense>
      </main>
    </div>
  )
}

export default App
