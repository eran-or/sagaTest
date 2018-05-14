import {API, SET_WALLETS} from '../action-types'

export const setOrders = (orders) => ({
  type: SET_WALLETS,
  orders
})

export const fetchOrders = () => ({
  type: API,
  payload: {
    url: 'api/wallets.json',
    success: (wallets) => setWallets(wallets),
    label: 'wallets'
  }
})
