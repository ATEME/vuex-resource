import { setMeta, getMeta, setData } from '../util'
import { toPath, isArray, isFunction, isNil } from 'lodash'

const types = {
  REQUEST_PENDING: 'REQUEST_PENDING',
  REQUEST_SUCCESS: 'REQUEST_SUCCESS',
  REQUEST_ERROR: 'REQUEST_ERROR'
}

export default ({ client, resource, _onError }) => ({
  mutations: {
    [types.REQUEST_PENDING](state, { path, action, promise }) {
      setMeta({ state, path, action, name: 'pending' }, promise)
    },

    [types.REQUEST_SUCCESS](state, { path, action, store, response }) {
      if (isArray(store)) {
        setData({ state, path: store }, response.data)
      } else if (isFunction(store)) {
        store(state, response)
      }
      setMeta({ state, path, action, name: 'pending' }, false)
      setMeta({ state, path, action, name: 'error' }, false)
      setMeta({ state, path, action, name: 'headers' }, response.headers)
    },

    [types.REQUEST_ERROR](state, { path, action, error }) {
      setMeta({ state, path, action, name: 'pending' }, false)
      setMeta({ state, path, action, name: 'error' }, error)
    }
  },

  actions: {
    /**
     * Emit a default axios request. If no method is provided it will default to GET
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('request', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    request(
      { commit, getters, state },
      { config = {}, path = [], returnPending = false, parse = res => res, store = false, action = null, onError } = {}
    ) {
      path = !isNil(path) ? toPath(path) : path
      store = store === true ? path : store

      // If a request is already pending, return related promise
      const pending = getMeta({
        state,
        path,
        action: config.method,
        name: 'pending'
      })
      if (returnPending && pending) {
        return pending
      }

      const promise = client({
        url: `${resource + ['', ...path].join('/')}`,
        ...config
      })
        .then(parse)
        .then(response => {
          commit(types.REQUEST_SUCCESS, {
            path,
            response,
            store,
            action: action || config.method
          })
          return response
        })
        .catch(error => {
          return onError ? onError(error) : _onError(error)
        })
        .catch(error => {
          commit(types.REQUEST_ERROR, {
            path,
            error,
            action: action || config.method
          })
          return Promise.reject(error)
        })

      commit(types.REQUEST_PENDING, {
        path,
        promise,
        action: action || config.method
      })
      return promise
    }
  }
})
