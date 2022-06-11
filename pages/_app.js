import React, { useCallback, useMemo, useState, useEffect } from 'react'
import * as nearAPI from 'near-api-js'
import { unstable_batchedUpdates } from 'react-dom'
import '~/styles/global.scss'
import getConfig from '~/config/index'

function MyApp({ Component, pageProps }) {
  const [contract, setContract] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [wallet, setWallet] = useState({})

  const nearConfig = useMemo(() => getConfig(process.env.NODE_ENV || 'testnet'), [])

  const initContract = useCallback(async () => {
    // Initializing connection to the NEAR TestNet
    const near = await nearAPI.connect({
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
      ...nearConfig
    });

    // Needed to access wallet
    const walletConnection = new nearAPI.WalletConnection(near);

    // Load in account data
    let currentUserData;
    if(walletConnection.getAccountId()) {
      currentUserData = {
        accountId: walletConnection.getAccountId(),
        balance: (await walletConnection.account().state()).amount
      };
    }

    // Initializing our contract APIs by contract name and configuration
    const contractData = await new nearAPI.Contract(walletConnection.account(), nearConfig.contractName, {
      // View methods are read-only – they don't modify the state, but usually return some value
      viewMethods: ['get_status'],
      // Change methods can modify the state, but you don't receive the returned value when called
      changeMethods: ['set_status'],
      // Sender is the account ID to initialize transactions.
      // getAccountId() will return empty string if user is still unauthorized
      sender: walletConnection.getAccountId()
    });

    console.log({ })

    unstable_batchedUpdates(() => {
      setContract(contractData)
      setCurrentUser(currentUserData)
      setWallet(walletConnection)
    })
  }, [])

  useEffect(() => {
    initContract()
  }, [initContract])

  return <Component {...pageProps} contract={contract} currentUser={currentUser} wallet={wallet} nearConfig={nearConfig} />
}

export default MyApp
