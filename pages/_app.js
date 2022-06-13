import React, { useEffect } from 'react'
import { initContract, login, logout } from '~/config/nearUtils'
import '~/styles/global.scss'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    initContract().then(() => {
      if (typeof window !== "undefined" && !window?.walletConnection.isSignedIn()) {
        login()
      }
    }).catch(error => {
      console.log({ error })
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
