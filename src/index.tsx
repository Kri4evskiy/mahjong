import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout'
import { Playground } from './components/Playground'

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Layout>
        <Playground />
      </Layout>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
