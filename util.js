/**
 * @module vuex-resource
 * @private
 */

import Vue from 'vue'
import { toPath, has, get, isNil, isPlainObject } from 'lodash'

/**
 * Based on a resource path, creates the exact path to the resource in state
 *
 * @param {string[]} path - the resource path
 * @returns {string[]} the the exact path to the resource in state
 */
export function getPath (path) {
  return toPath(path).reduce((acc, p) => [...acc, '/', p], ['resource'])
}

/**
 * Get the data at a given path
 *
 * @param {object} params
 * @param {object} params.state - the store state
 * @param {string[]} params.path - the resource path
 * @param {boolean} aggregate - indicate whether or not to aggregate data with subpaths data
 * @param {any} fallback - The value to return if data is not found
 * @returns {any} the found data
 */
export function getData ({ state, path = [], aggregate }, fallback) {
  const data = get(state, [...getPath(path), 'data'], fallback)

  return aggregate && isPlainObject(data)
    ? Object.keys(get(state, [...getPath(path), '/'], {}))
        .reduce((acc, key) => ({ ...acc, [key]: getData({ state, path: [...path, key], aggregate }) }), data)
    : data
}

/**
 * Set data at a given path
 * Usage in store mutation only
 *
 * @param {object} params
 * @param {object} params.state - the store state
 * @param {string[]} params.path - the resource path
 * @param {any} data - The data to set
 */
export function setData ({ state, path }, data) {
  deepSet(state, [...getPath(path), 'data'], data)
}

/**
 * Remove a given path from the state
 * Usage in store mutation only
 *
 * @param {object} params
 * @param {object} params.state - the store state
 * @param {string[]} params.path - the resource path
 */
export function removePath ({ state, path }) {
  deepDelete(state, getPath(path))
}

/**
 * Get the meta at a given path
 *
 * @param {object} params
 * @param {object} params.state - the store state
 * @param {string[]} params.path - the resource path
 * @param {string} params.action - the related action
 * @param {string} params.name - the name of the meta
 * @param {any} fallback - The value to return if meta is not found
 * @returns {any} the found meta
 */
export function getMeta ({ state, action, path, name }, fallback) {
  return get(state, [...getPath(path), 'meta', action, name], fallback)
}

/**
 * Set meta at a given path
 * Usage in store mutation only
 *
 * @param {object} params
 * @param {object} params.state - the store state
 * @param {string[]} params.path - the resource path
 * @param {string} params.action - the related action
 * @param {string} params.name - the name of the meta
 * @param {any} meta - The meta to set
 */
export function setMeta ({ state, action, path, name }, meta) {
  deepSet(state, [...getPath(path), 'meta', action, name], meta)
}

function deepSet (object, path, value) {
  let fields = toPath(path)
  let prop = fields.shift()

  if (!fields.length) return Vue.set(object, prop, value)
  if (!has(object, prop) || isNil(object[prop])) Vue.set(object, prop, fields.length >= 1 && typeof fields[0] === 'number' ? [] : {})

  deepSet(object[prop], fields, value)
}

function deepDelete (object, path) {
  let fields = toPath(path)
  let prop = fields.shift()

  if (!fields.length) return Vue.delete(object, prop)
  deepDelete(object[prop], fields)
}
