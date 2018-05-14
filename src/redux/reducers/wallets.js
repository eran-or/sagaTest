const walletsReducerDefaultState = []

export default (state = walletsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_WALLET':
      return action.wallets
    default:
      return state
  }
};