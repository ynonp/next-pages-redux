import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {  makeStore } from '../redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  const store = makeStore(pageProps);
  return <Provider store={store}>
    <Component />
  </Provider>    
}
