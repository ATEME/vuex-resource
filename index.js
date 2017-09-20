/**
 * @module vuex-resource
 */

import { merge, isFunction, isNil } from 'lodash'
import client from './client'
import _http from './features/http'
import _crud from './features/crud'
import _request from './features/request'
import * as util from './util'

export const setData = util.setData
export const setMeta = util.setMeta
export const getPath = util.getPath
export const removePath = util.removePath
export const getData = util.getData
export const getMeta = util.getMeta

/**
 *  Axios default client
 *
 * @static defaultClient
 */
export const defaultClient = client

/**
 * Generates a Vuex store based based on provided parameters
 *
 * @param {StoreConfig} config - the configuration to be provided to the store generator
 * @returns {store}
 */
export default function (
  {
  resource,
  client = defaultClient,
  formatRecord = record => record,
  getRecordId,
  aggregateData = false,
  store = {}
}) {
  return merge.apply(this, [
    // base store with initial state and getters
    {
      namespaced: true,

      state: {
        resource: {}
      },

      getters: {

        /**
         * Get a record by its id, formatted and/or aggregated with subpaths depending on config
         *
         * @function
         * @memberof store.getters
         * @param {string} id - The record's ID to look up
         * @param {object} config
         * @param {boolean} config.format - Indicate whether or not the record should be formatted
         * @param {boolean} config.agreggate - Indicate whether or not the record should be aggregated with subpaths
         * @return {object} The found record
         */
        byId: (state, getters, rootState, rootGetters) => (id, { format = true, aggregate = false } = {}) => {
          return getters.byPath([id])
            ? format
              ? formatRecord(getters.byPath([id], { aggregate }), { state, getters, rootState, rootGetters })
              : getters.byPath([id], { aggregate })
            : undefined
        },

        /**
         * Get data by its path, aggregated with subpaths depending on config
         *
         * @function
         * @memberof store.getters
         * @param {string[]} path - The path, an array of string, each string being a subpath, pointing to the data
         * @param {object} config
         * @param {boolean} config.agreggate - Indicate whether or not the data should be aggregated with subpaths
         * @return {object} The found data
         */
        byPath: state => (path, { aggregate = false } = {}) => {
          if (!isNil(path) && getData({ state, path })) {
            return getData({ state, path, aggregate })
          }
        },

        /**
         * Get all records already fetched once, globally or individually, formatted and/or aggregated with subpaths depending on config
         *
         * @function
         * @memberof store.getters
         * @param {object} config
         * @param {boolean} config.format - Indicate whether or not the records should be formatted
         * @param {boolean} config.agreggate - Indicate whether or not the records should be aggregated with subpaths
         * @return {object} The entire fetched collection
         */
        getAllRecords: (state, getters, rootState, rootGetters) => ({ format = true, aggregate = false } = {}) =>
          getData({ state, aggregate }, []).map(d => format ? formatRecord(d, { state, getters, rootState, rootGetters }) : d),

        /**
         * Accessor to the last refreshed root resource or collection, aggregated or not depending on store config
         *
         * @var
         * @memberof store.getters
         */
        data: (state, getters, rootState, rootGetters) => isFunction(getRecordId)
          ? getMeta({ state, action: 'refresh', name: 'ids' }, []).map(id => getters.byId(id, { aggregate: aggregateData })).filter(entity => !isNil(entity))
          : getData({ state, aggregate: aggregateData })
      }
    },

    // store responsible of emitting requests and commiting actions
    _request({ client, resource }),

    // store responsible of emitting basic http request
    _http(),

    // store responsible of emitting CRUD actions
    _crud({ getRecordId }),

    // user defined store
    store
  ])
}
