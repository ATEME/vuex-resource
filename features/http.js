export default () => ({
  actions: {

    /**
     * Emit a GET request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('get', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    get ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'get' } })
    },

    /**
     * Emit a HEAD request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('head', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    head ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'head' } })
    },

    /**
     * Emit a POST request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('post', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    post ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'post' } })
    },

    /**
     * Emit a PUT request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('put', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    put ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'put' } })
    },

    /**
     * Emit a DELETE request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('delete', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    delete ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'delete' } })
    },

    /**
     * Emit a CONNECT request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('connect', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    connect ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'connect' } })
    },

    /**
     * Emit a OPTIONS request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('options', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    options ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'options' } })
    },

    /**
     * Emit a TRACE request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('trace', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    trace ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'trace' } })
    },

    /**
     * Emit a PATCH request
     *
     * @event
     * @memberof store.actions
     * @example store.dispatch('patch', params)
     * @param {ActionParams} params - the parameters object
     * @returns {Promise} the related request's promise
     */
    patch ({ dispatch }, params) {
      return dispatch('request', { ...params, config: { ...params.config, method: 'patch' } })
    }
  }
})
