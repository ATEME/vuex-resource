# vuex-resource

The goal of this module is to generate a vuex store providing the basic actions to manage a resource related API.
If the resource is a collection, records can be easily managed with the provided CRUD actions.

## Installation

```bash
npm install --save vuex-resource
```

## Initialization


```js
import createStore from 'vuex-resource'
import Vuex from 'vuex'

const store = new Vuex.Store(

  createStore({

    // indicate the endpoint to your resource
    resource: 'my-resource',

    // extend the store with your own defined store
    store: {}

  })

)
```

## State structure

Once created, the state will have a single property : `resource`, an empty object.

```js
{
  resource: {}
}
```

The hierarchy in this `resource` object is created according to the paths given in the actions. Each level of hierarchy may contain:

```js
{
  // the response data
  data: null,
  
  // the metadata related to each actions
  meta: {},

  // an access to the sub paths
  '/': {}
}
```

The meta property of an action may contain:

```js
{
  // the promise related to the current pending request, or false if no request is pending
  pending,

  // the last errored response, or false if last response is not errored
  error,

  // headers from last response
  headers
}
```

After many actions, with different paths and different methods, your state may look like:

```js
{
  resource: {
    data,
    meta: {
      [an_action]: {
        pending,
        error,
        headers
      },
      [another_action]: { /* ... */ }
    },
    '/': {
      [path_1]: {
        data,
        meta,
        '/': {
          [path_1_1]: {
            data,
            meta,
            '/': { /* ... */ }
          }
        }
      },
      [path_2]: {
        data,
        meta,
        '/': { /* ... */ }
      }
    }
  }
}
```

With this hierarchy, it can quickly be a pain to retrieve informations from your state, this is why the following utility functions are provided:

```js
import { getData, setData, getMeta, setMeta, getPath, removePath } from 'vuex-resource'


getData({ state, path: ['nice', 'path'] }, fallback)
// will return state.resource['/']['nice']['/']['path'].data if it exists or provided fallback value if inexistant

setData({ state, path: ['nice', 'path'] }, data)
// will set state.resource['/']['nice']['/']['path'].data with provided data value

getMeta({ state, path: ['nice', 'path'], action: 'post', name: 'pending' }, fallback)
// will return state.resource['/']['nice']['/']['path'].meta['post']['pending'] if it exists or provided fallback value if inexistant

setMeta({ state, path: ['nice', 'path'], action: 'post', name: 'pending' }, meta)
// will set state.resource['/']['nice']['/']['path'].meta['post']['pending'] with provided meta value

getPath(['nice', 'path'])
// will return the new array ['resource', '/', 'nice', '/', 'path']

removePath({ state, path: ['nice', 'path']})
// will delete the key 'path' from the object state.resource['/']['nice']['/']
``` 

__Caution__: `setData`, `setMeta`, and `removePath` should be executed exclusively inside mutations because they alter the state.

## Basic usage

### Actions

Each HTTP method has its own defined action:

```js
store.dispatch('get', params)
  .then(response => { /* ... */ })

store.dispatch('head', params)
  .then(response => { /* ... */ })

store.dispatch('post', params)
  .then(response => { /* ... */ })

store.dispatch('put', params)
  .then(response => { /* ... */ })

store.dispatch('delete', params)
  .then(response => { /* ... */ })

store.dispatch('connect', params)
  .then(response => { /* ... */ })

store.dispatch('options', params)
  .then(response => { /* ... */ })

store.dispatch('trace', params)
  .then(response => { /* ... */ })

store.dispatch('patch', params)
  .then(response => { /* ... */ })
```

When dispatching the action, you can provide a `params` object containing the default following properties:

```js
const params = {

  /*
    An array of strings describing the extra paths to a specific resource
    Each subpath in the url is an item in the array
  */
  path: [],

  /*
    The configuration object to use with axios.
    https://github.com/mzabriskie/axios#request-config
  */
  config: {},

  /*
    A boolean indicating whether or not an already pending request should be returned instead of emitting a new request
  */
  returnPending: false,

  /*
    A method called right after the response is received and used to transform it
  */
  parse: response => response,

  /*
    Indicates whether or not the response should be stored and how to store it:
    - if it is false, the response will not be stored
    - if it is true, the response will be stored in state at the path given by the url path property
    - if it is an array of string, the response will be stored in state at the path given by the array
    - if it is a function, you decide how and where to store in the state. It receives the state as first argument and the response as second argument.
  */
  store: false
}
```

The basic CRUD methods are also available and already configured to update the state accordingly:

```js

/*
  'create' execute a 'post' action and store the response at the path given in params
*/
store.dispatch('create', params)
  .then(response => { /* .. */ })

/*
  'refresh' execute a 'get' action and store the response at the path given in params
*/
store.dispatch('refresh', params)
  .then(response => { /* .. */ })

/*
  'update' execute a 'put' action and store the response at the path given in params
*/
store.dispatch('update', params)
  .then(response => { /* .. */ })

/*
  'destroy' execute a 'delete' action and remove the related path from the state
*/
store.dispatch('destroy', params)
  .then(response => { /* .. */ })
```

### Getters

The following getters are available within the store:

```js
store.getters['data']
// will return the root data value

store.getters['byPath'](path: Array)
// will return the value at the specified path
```


## Collection usage

If the resource you are managing is a collection with identifiable records, you can prevent data redundancy when refreshing a single record or many records. A store becomes collection-ready if the method `getRecordId` is provided during creation.

```js
createStore({
  resource: 'my-resource',

  // Function returning the ID of a record
  getRecordId: record => record.id,

  // Function used in getters to format a record
  formatRecord: (record, { state, getters, rootState, rootGetters }) => ({ ...record })
})
```

The two following getters become then usefull:

```js
store.getters['getAllRecords'](config: Object)
// will return all the records already fetched, globally or individually, formatted with 'formatRecord' if 'config.format' is true

store.getters['byId'](id: String, config: Object)
// will return the record with related id, formatted with 'formatRecord' if 'config.format' is true
```

When a store is collection-ready, the behaviour of the `refresh` action is different when no path is provided. Here's what it does:

 1. fetch the entire collection (or a portion, based on the provided query string)
 1. parse the received records with the method `getRecordId`
 1. store each record at the right path


For example, let's say the full collection of `my-resource` is equal to:

```js
[{
  id: 'a1',
  name: 'A1'
}, {
  id: 'b2',
  name: 'B2'
}, {
  id: 'c3',
  name: 'C3'
}]
```

With `getRecordId` not set and once the promise `store.dispatch('refresh')` is resolved, the state will look like:

```js
{
  resource: {
    data: [{
      id: 'a1',
      name: 'A1'
    }, {
      id: 'b2',
      name: 'B2'
    }, {
      id: 'c3',
      name: 'C3'
    }],
    meta: {
      refresh: {
        pending: false,
        error: false,
        headers: { ... }
      }
    }
  }
}
```

The same action with `getRecordId` provided during creation will lead to the following state:

```js
{
  resource: {
    '/': {
      a1: {
        data: {
          id: 'a1',
          name: 'A1'
        }
      },
      b2: {
        data: {
          id: 'b2',
          name: 'B2'
        }
      },
      c3: {
        data: {
          id: 'c3',
          name: 'C3'
        }
      }
    },
    meta: {
      refresh: {
        pending: false,
        error: false,
        headers: { ... },
        ids: ['a1', 'b2', 'c3']
      }
    }
  }
}
```

Here we notice a new meta `ids`. It corresponds to the array of record ids from the last 'refresh' action response. The getter `data` behave also differently, because it uses this new meta to reconstruct the collection:

```js
store.getters['data']
```

is then still equal to

```js
[{
  id: 'a1',
  name: 'A1'
}, {
  id: 'b2',
  name: 'B2'
}, {
  id: 'c3',
  name: 'C3'
}]
```

With this behaviour, `store.dispatch('refresh')` and `store.dispatch('refresh', { path: ['a1'] })` will both refresh the same object in state. Each record is stored at one single place.

## Advanced

### Customizing Client

Before store creation you can create your own axios client:

```js
import createStore, { defaultClient } from 'vuex-resource'
import Vuex from 'vuex'

const myClient = defaultClient.create({ baseURL: 'api/' })

const store = new Vuex.Store(
  createStore({
    resource: 'my-resource',
    client: myClient
  })
)
```

### Aggregate Data

```js
store.getters['byPath'](['a1'], { aggregate: true })
store.getters['byId']('a1', { aggregate: true })
store.getters['getAllRecords']({ aggregate: true })
```

The getters `byPath`, `byId` and `getAllRecords` all have, as last argument, a `config` object. This object contains a property `aggregate`, a boolean, that let you decide if the data should be aggregated or not.

When `aggregate` is set to `true`, all the data found in subpaths will be set as properties in the returned data ONLY if the data at the asked path is an object

For example, when the store is equal to

```js
{
  resource: {
    meta: { ... },
    '/': {
      'a1': {
        data: {
          id: 'a1',
          user: 'tom'
        }
        '/': {
          'color': {
            meta: { ... },
            data: 'yellow'
          }
        }
      },
      'b2': {
        data: {
          id: 'b2',
          user: 'lulu'
        }
      }
    }
  }
}
```

 by calling 
`store.getters['byId']('a1', { aggregate: true })` or `store.getters['byPath'](['a1'], { aggregate: true })`, you will get


```js
{
  id: 'a1',
  user: 'tom',
  color: 'yellow'
}
```

You can also get aggregated data by calling the getter `data` by setting the property `aggregateData` to `true` when initializing the store:

```js
createStore({
  resource: 'my-resource',
  aggregateData: true
})
```

Then with the same store, `store.getters['data']` will be equal to

```js
[{
  id: 'a1',
  user: 'tom',
  color: 'yellow'
}, {
  id: 'b2',
  user: 'lulu'
}]
```

## API

Full API can be found [here](https://github.com/ATEME/vuex-resource/blob/master/API.md)

## License

vuex-resource is [MIT licensed](https://github.com/ATEME/vuex-resource/blob/master/LICENSE)