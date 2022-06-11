import React, { useEffect } from 'react'
import { initContract, login } from '~/config/nearUtils'
import '~/styles/global.scss'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    initContract().then(() => {
      console.log({ wallet: window.walletConnection, isSignedIn: window.walletConnection.isSignedIn() })
      if (!window.walletConnection.isSignedIn()) {
        login()
      }
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
