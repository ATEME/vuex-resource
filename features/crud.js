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
    create ({ commit, getters, dispatch }, { path = [], config, returnPending = false, store = true, parse = res => res }) {
      return dispatch('post', {
        path,
        config,
        returnPending,
        store,
        parse,
        action: 'create'
      })
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
    refresh ({ dispatch }, { path = [], config, returnPending = false, parse = res => res, store = true, storeIds = true } = {}) {
        // If getRecordId is provided, it means resource is a collection, then we store records at the path given by the getRecordId method
      if (isFunction(getRecordId) && store === true && path.length === 0) {
        store = (state, response) => {
          response.data.forEach(d => setData({ state, path: [getRecordId(d)] }, d))
          storeIds && setMeta({ state, path, action: 'refresh', name: 'ids' }, response.data.map(d => getRecordId(d).toString()))
        }
      }

      return dispatch('get', {
        path,
        config,
        store,
        returnPending,
        parse,
        action: 'refresh'
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
    update ({ commit, getters, dispatch }, { path = [], config, returnPending = false, store = true, parse = res => res }) {
      return dispatch('put', {
        path,
        config,
        store,
        parse,
        returnPending,
        action: 'update'
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
    destroy ({ commit, getters, dispatch }, { path = [], config, returnPending = false, store = false, parse = res => res }) {
      return dispatch('delete', {
        path,
        config,
        store: (state, response) => removePath({ state, path }),
        parse,
        returnPending,
        action: 'destroy'
      })
    }
  },

  getters: {
    refreshing: state => !!getMeta({ state, action: 'refresh', name: 'pending' })
  }
})

