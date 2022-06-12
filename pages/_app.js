import React, { useEffect } from 'react'
import { initContract, login, logout } from '~/config/nearUtils'
import '~/styles/global.scss'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    initContract().then(() => {
      console.log('---------------- near loaded -----------------', window.walletConnection)
      console.log('----------------------- is sign in ------------', window.walletConnection.isSignedIn())
      if (typeof window !== "undefined" && !window.walletConnection.isSignedIn()) {
        debugger
        login()
      }
    }).catch(error => {
      console.log({ error })
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
