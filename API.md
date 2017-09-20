<a name="module_vuex-resource"></a>

## vuex-resource

* [vuex-resource](#module_vuex-resource)
    * [`module.exports(config)`](#exp_module_vuex-resource--module.exports) ⇒ [<code>store</code>](#store) ⏏
        * [`.defaultClient`](#module_vuex-resource--module.exports.defaultClient)
        * [`.getPath(path)`](#module_vuex-resource--module.exports.getPath) ⇒ <code>Array.&lt;string&gt;</code>
        * [`.getData(params, aggregate, fallback)`](#module_vuex-resource--module.exports.getData) ⇒ <code>any</code>
        * [`.setData(params, data)`](#module_vuex-resource--module.exports.setData)
        * [`.removePath(params)`](#module_vuex-resource--module.exports.removePath)
        * [`.getMeta(params, fallback)`](#module_vuex-resource--module.exports.getMeta) ⇒ <code>any</code>
        * [`.setMeta(params, meta)`](#module_vuex-resource--module.exports.setMeta)


* * *

<a name="exp_module_vuex-resource--module.exports"></a>

### `module.exports(config)` ⇒ [<code>store</code>](#store) ⏏
Generates a Vuex store based based on provided parameters

**Kind**: Exported function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code><a href="#StoreConfig">StoreConfig</a></code></td><td><p>the configuration to be provided to the store generator</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="module_vuex-resource--module.exports.defaultClient"></a>

#### `module.exports.defaultClient`
Axios default client

**Kind**: static constant of [<code>module.exports</code>](#exp_module_vuex-resource--module.exports)  

* * *

<a name="module_vuex-resource--module.exports.getPath"></a>

#### `module.exports.getPath(path)` ⇒ <code>Array.&lt;string&gt;</code>
Based on a resource path, creates the exact path to the resource in state

**Kind**: static method of [<code>module.exports</code>](#exp_module_vuex-resource--module.exports)  
**Returns**: <code>Array.&lt;string&gt;</code> - the the exact path to the resource in state  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>Array.&lt;string&gt;</code></td><td><p>the resource path</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="module_vuex-resource--module.exports.getData"></a>

#### `module.exports.getData(params, aggregate, fallback)` ⇒ <code>any</code>
Get the data at a given path

**Kind**: static method of [<code>module.exports</code>](#exp_module_vuex-resource--module.exports)  
**Returns**: <code>any</code> - the found data  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>params.state</td><td><code>object</code></td><td><p>the store state</p>
</td>
    </tr><tr>
    <td>params.path</td><td><code>Array.&lt;string&gt;</code></td><td><p>the resource path</p>
</td>
    </tr><tr>
    <td>aggregate</td><td><code>boolean</code></td><td><p>indicate whether or not to aggregate data with subpaths data</p>
</td>
    </tr><tr>
    <td>fallback</td><td><code>any</code></td><td><p>The value to return if data is not found</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="module_vuex-resource--module.exports.setData"></a>

#### `module.exports.setData(params, data)`
Set data at a given pathUsage in store mutation only

**Kind**: static method of [<code>module.exports</code>](#exp_module_vuex-resource--module.exports)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>params.state</td><td><code>object</code></td><td><p>the store state</p>
</td>
    </tr><tr>
    <td>params.path</td><td><code>Array.&lt;string&gt;</code></td><td><p>the resource path</p>
</td>
    </tr><tr>
    <td>data</td><td><code>any</code></td><td><p>The data to set</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="module_vuex-resource--module.exports.removePath"></a>

#### `module.exports.removePath(params)`
Remove a given path from the stateUsage in store mutation only

**Kind**: static method of [<code>module.exports</code>](#exp_module_vuex-resource--module.exports)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>params.state</td><td><code>object</code></td><td><p>the store state</p>
</td>
    </tr><tr>
    <td>params.path</td><td><code>Array.&lt;string&gt;</code></td><td><p>the resource path</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="module_vuex-resource--module.exports.getMeta"></a>

#### `module.exports.getMeta(params, fallback)` ⇒ <code>any</code>
Get the meta at a given path

**Kind**: static method of [<code>module.exports</code>](#exp_module_vuex-resource--module.exports)  
**Returns**: <code>any</code> - the found meta  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>params.state</td><td><code>object</code></td><td><p>the store state</p>
</td>
    </tr><tr>
    <td>params.path</td><td><code>Array.&lt;string&gt;</code></td><td><p>the resource path</p>
</td>
    </tr><tr>
    <td>params.action</td><td><code>string</code></td><td><p>the related action</p>
</td>
    </tr><tr>
    <td>params.name</td><td><code>string</code></td><td><p>the name of the meta</p>
</td>
    </tr><tr>
    <td>fallback</td><td><code>any</code></td><td><p>The value to return if meta is not found</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="module_vuex-resource--module.exports.setMeta"></a>

#### `module.exports.setMeta(params, meta)`
Set meta at a given pathUsage in store mutation only

**Kind**: static method of [<code>module.exports</code>](#exp_module_vuex-resource--module.exports)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>params.state</td><td><code>object</code></td><td><p>the store state</p>
</td>
    </tr><tr>
    <td>params.path</td><td><code>Array.&lt;string&gt;</code></td><td><p>the resource path</p>
</td>
    </tr><tr>
    <td>params.action</td><td><code>string</code></td><td><p>the related action</p>
</td>
    </tr><tr>
    <td>params.name</td><td><code>string</code></td><td><p>the name of the meta</p>
</td>
    </tr><tr>
    <td>meta</td><td><code>any</code></td><td><p>The meta to set</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="store"></a>

## `store` : <code>object</code>
The created store

**Kind**: global typedef  

* [`store`](#store) : <code>object</code>
    * [`.actions`](#store.actions)
        * [`"create" (params)`](#store.actions.event_create) ⇒ <code>Promise</code>
        * [`"refresh" (params)`](#store.actions.event_refresh) ⇒ <code>Promise</code>
        * [`"update" (params)`](#store.actions.event_update) ⇒ <code>Promise</code>
        * [`"destroy" (params)`](#store.actions.event_destroy) ⇒ <code>Promise</code>
        * [`"get" (params)`](#store.actions.event_get) ⇒ <code>Promise</code>
        * [`"head" (params)`](#store.actions.event_head) ⇒ <code>Promise</code>
        * [`"post" (params)`](#store.actions.event_post) ⇒ <code>Promise</code>
        * [`"put" (params)`](#store.actions.event_put) ⇒ <code>Promise</code>
        * [`"delete" (params)`](#store.actions.event_delete) ⇒ <code>Promise</code>
        * [`"connect" (params)`](#store.actions.event_connect) ⇒ <code>Promise</code>
        * [`"options" (params)`](#store.actions.event_options) ⇒ <code>Promise</code>
        * [`"trace" (params)`](#store.actions.event_trace) ⇒ <code>Promise</code>
        * [`"patch" (params)`](#store.actions.event_patch) ⇒ <code>Promise</code>
        * [`"request" (params)`](#store.actions.event_request) ⇒ <code>Promise</code>
    * [`.getters`](#store.getters)
        * [`.data`](#store.getters.data)
        * [`.byId(id, config)`](#store.getters.byId) ⇒ <code>object</code>
        * [`.byPath(path, config)`](#store.getters.byPath) ⇒ <code>object</code>
        * [`.getAllRecords(config)`](#store.getters.getAllRecords) ⇒ <code>object</code>


* * *

<a name="store.actions"></a>

### `store.actions`
All the actions available within the created store

**Kind**: static property of [<code>store</code>](#store)  

* [`.actions`](#store.actions)
    * [`"create" (params)`](#store.actions.event_create) ⇒ <code>Promise</code>
    * [`"refresh" (params)`](#store.actions.event_refresh) ⇒ <code>Promise</code>
    * [`"update" (params)`](#store.actions.event_update) ⇒ <code>Promise</code>
    * [`"destroy" (params)`](#store.actions.event_destroy) ⇒ <code>Promise</code>
    * [`"get" (params)`](#store.actions.event_get) ⇒ <code>Promise</code>
    * [`"head" (params)`](#store.actions.event_head) ⇒ <code>Promise</code>
    * [`"post" (params)`](#store.actions.event_post) ⇒ <code>Promise</code>
    * [`"put" (params)`](#store.actions.event_put) ⇒ <code>Promise</code>
    * [`"delete" (params)`](#store.actions.event_delete) ⇒ <code>Promise</code>
    * [`"connect" (params)`](#store.actions.event_connect) ⇒ <code>Promise</code>
    * [`"options" (params)`](#store.actions.event_options) ⇒ <code>Promise</code>
    * [`"trace" (params)`](#store.actions.event_trace) ⇒ <code>Promise</code>
    * [`"patch" (params)`](#store.actions.event_patch) ⇒ <code>Promise</code>
    * [`"request" (params)`](#store.actions.event_request) ⇒ <code>Promise</code>


* * *

<a name="store.actions.event_create"></a>

#### `"create" (params)` ⇒ <code>Promise</code>
Dispatch a 'post' action and store the response at the path given in params

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('create', { path: [], config: { data: { a:1, b:2 } } })
```

* * *

<a name="store.actions.event_refresh"></a>

#### `"refresh" (params)` ⇒ <code>Promise</code>
Dispatch a 'get' action and store the response at the path given in paramsIf the store is collection-ready and no path is given, store each fetched records at their ID related subpath

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#RefreshParams">RefreshParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('refresh')
```

* * *

<a name="store.actions.event_update"></a>

#### `"update" (params)` ⇒ <code>Promise</code>
Dispatch a 'put' action and store the response at the path given in params

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('update', { path: [], config: { data: { a:1, b:2 } } })
```

* * *

<a name="store.actions.event_destroy"></a>

#### `"destroy" (params)` ⇒ <code>Promise</code>
Dispatch a 'delete' action and store the response at the path given in params

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('destroy', { path: ['a'] })
```

* * *

<a name="store.actions.event_get"></a>

#### `"get" (params)` ⇒ <code>Promise</code>
Emit a GET request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('get', params)
```

* * *

<a name="store.actions.event_head"></a>

#### `"head" (params)` ⇒ <code>Promise</code>
Emit a HEAD request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('head', params)
```

* * *

<a name="store.actions.event_post"></a>

#### `"post" (params)` ⇒ <code>Promise</code>
Emit a POST request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('post', params)
```

* * *

<a name="store.actions.event_put"></a>

#### `"put" (params)` ⇒ <code>Promise</code>
Emit a PUT request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('put', params)
```

* * *

<a name="store.actions.event_delete"></a>

#### `"delete" (params)` ⇒ <code>Promise</code>
Emit a DELETE request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('delete', params)
```

* * *

<a name="store.actions.event_connect"></a>

#### `"connect" (params)` ⇒ <code>Promise</code>
Emit a CONNECT request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('connect', params)
```

* * *

<a name="store.actions.event_options"></a>

#### `"options" (params)` ⇒ <code>Promise</code>
Emit a OPTIONS request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('options', params)
```

* * *

<a name="store.actions.event_trace"></a>

#### `"trace" (params)` ⇒ <code>Promise</code>
Emit a TRACE request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('trace', params)
```

* * *

<a name="store.actions.event_patch"></a>

#### `"patch" (params)` ⇒ <code>Promise</code>
Emit a PATCH request

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('patch', params)
```

* * *

<a name="store.actions.event_request"></a>

#### `"request" (params)` ⇒ <code>Promise</code>
Emit a default axios request. If not method is provided it will default to GET

**Kind**: event emitted by [<code>actions</code>](#store.actions)  
**Returns**: <code>Promise</code> - the related request's promise  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>params</td><td><code><a href="#ActionParams">ActionParams</a></code></td><td><p>the parameters object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
store.dispatch('request', params)
```

* * *

<a name="store.getters"></a>

### `store.getters`
All the getters available within the created store

**Kind**: static property of [<code>store</code>](#store)  

* [`.getters`](#store.getters)
    * [`.data`](#store.getters.data)
    * [`.byId(id, config)`](#store.getters.byId) ⇒ <code>object</code>
    * [`.byPath(path, config)`](#store.getters.byPath) ⇒ <code>object</code>
    * [`.getAllRecords(config)`](#store.getters.getAllRecords) ⇒ <code>object</code>


* * *

<a name="store.getters.data"></a>

#### `getters.data`
Accessor to the last refreshed root resource or collection, aggregated or not depending on store config

**Kind**: static property of [<code>getters</code>](#store.getters)  

* * *

<a name="store.getters.byId"></a>

#### `getters.byId(id, config)` ⇒ <code>object</code>
Get a record by its id, formatted and/or aggregated with subpaths depending on config

**Kind**: static method of [<code>getters</code>](#store.getters)  
**Returns**: <code>object</code> - The found record  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>id</td><td><code>string</code></td><td><p>The record&#39;s ID to look up</p>
</td>
    </tr><tr>
    <td>config</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>config.format</td><td><code>boolean</code></td><td><p>Indicate whether or not the record should be formatted</p>
</td>
    </tr><tr>
    <td>config.agreggate</td><td><code>boolean</code></td><td><p>Indicate whether or not the record should be aggregated with subpaths</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="store.getters.byPath"></a>

#### `getters.byPath(path, config)` ⇒ <code>object</code>
Get data by its path, aggregated with subpaths depending on config

**Kind**: static method of [<code>getters</code>](#store.getters)  
**Returns**: <code>object</code> - The found data  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>Array.&lt;string&gt;</code></td><td><p>The path, an array of string, each string being a subpath, pointing to the data</p>
</td>
    </tr><tr>
    <td>config</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>config.agreggate</td><td><code>boolean</code></td><td><p>Indicate whether or not the data should be aggregated with subpaths</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="store.getters.getAllRecords"></a>

#### `getters.getAllRecords(config)` ⇒ <code>object</code>
Get all records already fetched once, globally or individually, formatted and/or aggregated with subpaths depending on config

**Kind**: static method of [<code>getters</code>](#store.getters)  
**Returns**: <code>object</code> - The entire fetched collection  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>config.format</td><td><code>boolean</code></td><td><p>Indicate whether or not the records should be formatted</p>
</td>
    </tr><tr>
    <td>config.agreggate</td><td><code>boolean</code></td><td><p>Indicate whether or not the records should be aggregated with subpaths</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ActionParams"></a>

## `ActionParams` : <code>Object</code>
The parameter object to be provided to each action

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td><p>The configuration object to be provided to Axios</p>
</td>
    </tr><tr>
    <td>path</td><td><code>Array.&lt;string&gt;</code></td><td><p>All the sub paths that lead to a sub resource</p>
</td>
    </tr><tr>
    <td>returnPending</td><td><code>boolean</code></td><td><p>Indicates whether or not an already pending request should be returned instead of emitting a new request</p>
</td>
    </tr><tr>
    <td>parse</td><td><code>function</code></td><td><p>A method called right after the response is received and used to transform it</p>
</td>
    </tr><tr>
    <td>store</td><td><code>boolean</code> | <code>Array.&lt;string&gt;</code> | <code>function</code></td><td><p>Indicates whether or not the response should be stored and how to store it:</p>
<pre><code>- if it is false, the response will not be stored
- if it is true, the response will be stored in state at the path given by the url path property
- if it is an array of string, the response will be stored in state at the path given by the array
- if it is a function, you decide how and where to store it. It receives the state as first argument and the response as second argument.
</code></pre></td>
    </tr>  </tbody>
</table>


* * *

<a name="RefreshParams"></a>

## `RefreshParams` : <code>Object</code>
The parameter object to be provided to the action 'refresh'

**Kind**: global typedef  
**Extends**: [<code>ActionParams</code>](#ActionParams)  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>storeIds</td><td><code>boolean</code></td><td><p>Indicates whether or not the ids should be stored in meta.
The getter &#39;data&#39; rebuild the collection with those ids. If &#39;storeIds&#39; is set to false, the collection will be fetched and stored, but ids in meta won&#39;t change, and then getter &#39;data&#39; won&#39;t change</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="StoreConfig"></a>

## `StoreConfig` : <code>Object</code>
The configuration object to be provided to the store generator

**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>resource</td><td><code>string</code></td><td><p>the resource url</p>
</td>
    </tr><tr>
    <td>client</td><td><code>object</code></td><td><p>your custom axios client</p>
</td>
    </tr><tr>
    <td>formatRecord</td><td><code>function</code></td><td><p>the method used to format records in getters &#39;byId&#39; and &#39;getAllRecords&#39;</p>
</td>
    </tr><tr>
    <td>getRecordId</td><td><code>function</code></td><td><p>the method used to retrieve a record ID</p>
</td>
    </tr><tr>
    <td>aggregateData</td><td><code>boolean</code></td><td><p>indicate whether or not data should be aggregated in getter &#39;data&#39;</p>
</td>
    </tr><tr>
    <td>store</td><td><code>object</code></td><td><p>your custom store</p>
</td>
    </tr>  </tbody>
</table>


* * *

