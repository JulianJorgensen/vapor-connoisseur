export const createClientMiddleware = (client) => {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, client)
    }

    return next(action)
  }
}
