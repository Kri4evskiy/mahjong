import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout'
import { Playground } from './components/Playground'
import reportWebVitals from './reportWebVitals'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
