import { setData, setMeta, getMeta, removePath } from '../util'
import { isFunction } from 'lodash'

export default ({ getRecordId }) => ({
  actions: {
    /**
     * Dispatch a 'post' action and store the response at the path given in params
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('create', { path: [], config: { data: { a:1, b:2 } } })
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    create({ dispatch }, { store = true, ...opts }) {
      return dispatch('post', {
        store,
        action: 'create',
        ...opts
      })
    },

    /**
     * Refresh a path only if 'error' meta doesn't already exists or is not falsy (which means last request exists and was successful)
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('refresh')
     * @param {RefreshParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    fetch({ state, dispatch }, { path, ...opts }) {
      if (
        getMeta({
          state,
          path: path,
          action: 'refresh',
          name: 'error'
        }) !== false
      ) {
        return dispatch('refresh', { path, ...opts })
      }
    },

    /**
     * Dispatch a 'get' action and store the response at the path given in params
     * If the store is collection-ready and no path is given, store each fetched records at their ID related subpath
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('refresh')
     * @param {RefreshParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    refresh(
      { dispatch },
      { path = [], returnPending = false, returnExisting = false, store = true, storeIds = true, ...opts } = {}
    ) {
      // if getRecordId is provided, it means resource is a collection, then we store records at the path given by the getRecordId method
      if (isFunction(getRecordId) && store === true && path.length === 0) {
        store = function(state, response) {
          response.data.forEach(d => setData({ state, path: [getRecordId(d)] }, d))
          storeIds &&
            setMeta({ state, path, action: 'refresh', name: 'ids' }, response.data.map(d => getRecordId(d).toString()))
        }
      }

      return dispatch('get', {
        path,
        store,
        returnPending,
        action: 'refresh',
        ...opts
      })
    },

    /**
     * Dispatch a 'put' action and store the response at the path given in params
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('update', { path: [], config: { data: { a:1, b:2 } } })
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    update({ dispatch }, { store = true, ...opts }) {
      return dispatch('put', {
        store,
        action: 'update',
        ...opts
      })
    },

    /**
     * Dispatch a 'delete' action and store the response at the path given in params
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('destroy', { path: ['a'] })
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    destroy({ dispatch }, { path, ...opts }) {
      return dispatch('delete', {
        path,
        store: (state, response) => removePath({ state, path }),
        action: 'destroy',
        ...opts
      })
    }
  },

  getters: {
    refreshing: state => !!getMeta({ state, action: 'refresh', name: 'pending' })
  }
})
