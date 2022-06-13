import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import getConfig from "./";

const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

export async function initContract() {
  try {
    const near = await connect(
      Object.assign(
        { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
        nearConfig
      )
    );
  
    window.walletConnection = new WalletConnection(near);
  
    window.accountId = window.walletConnection.getAccountId();
  
    window.contract = await new Contract(
      window.walletConnection.account(),
      nearConfig.contractName,
      {
        viewMethods: [
          "get_posts",
        ],
        changeMethods: [],
      }
    ); 
  } catch (error) {
    console.log(error)
  }
}

export function logout() {
  if (typeof window !== 'undefined' && window?.walletConnection) {
    window.walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  }
}

export function login() {
  window.walletConnection.requestSignIn(nearConfig.contractName);
}

export async function viewState() {
  let account = window.walletConnection.account();
  // Use near-api-js to perform the call. Since this is using the JS SDK, 
  // the jsContract boolean must be set to true.
  const result = await account.viewFunction(
    nearConfig.contractName, 
    'get_posts', 
    {
      from_index: 1,
      limit: 999
    },
    { 
      jsContract: true
    }
  )

  return result
}
