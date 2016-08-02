import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import { default as userData } from 'REDUCER/user'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router,

    // Add sync reducers here
    userData,

    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
