/**
 * @typedef {object} store
 * @description The created store
 */

/**
 * @name actions
 * @description All the actions available within the created store
 * @memberof store
 */

/**
 * @name getters
 * @description All the getters available within the created store
 * @memberof store
 */

/**
 * The parameter object to be provided to each action
 *
 * @typedef {Object} ActionParams
 * @type {object}
 * @property {object} config - The configuration object to be provided to Axios
 * @property {string[]} path - All the sub paths that lead to a sub resource
 * @property {boolean} returnPending - Indicates whether or not an already pending request should be returned instead of emitting a new request
 * @property {function} parse - A method called right after the response is received and used to transform it
 * @property {boolean|string[]|function} store - Indicates whether or not the response should be stored and how to store it:
    - if it is false, the response will not be stored
    - if it is true, the response will be stored in state at the path given by the url path property
    - if it is an array of string, the response will be stored in state at the path given by the array
    - if it is a function, you decide how and where to store it. It receives the state as first argument and the response as second argument.
 */

/**
 * The parameter object to be provided to the action 'refresh'
 *
 * @typedef {Object} RefreshParams
 * @type {object}
 * @extends ActionParams
 * @property {boolean} storeIds - Indicates whether or not the ids should be stored in meta.
 * The getter 'data' rebuild the collection with those ids. If 'storeIds' is set to false, the collection will be fetched and stored, but ids in meta won't change, and then getter 'data' won't change
 */

/**
 * The configuration object to be provided to the store generator
 *
 * @typedef {Object} StoreConfig
 * @type {object}
 * @property {string} resource - the resource url
 * @property {object} client - your custom axios client
 * @property {function} formatRecord - the method used to format records in getters 'byId' and 'getAllRecords'
 * @property {function} getRecordId - the method used to retrieve a record ID
 * @property {boolean} aggregateData - indicate whether or not data should be aggregated in getter 'data'
 * @property {object} store - your custom store
 */
