import React from 'react'
import {AppProps} from 'next/app'
import '../styles/globals.scss'

const App = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}

export default App
