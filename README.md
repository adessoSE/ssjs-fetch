# SSJS fetch
Simplified interface for Script.Util.HttpRequest.
## Installation
npm install ssjs-fetch
## Interface
```
Get: function (url, headers = [], continueOnError = true, retries = 0, emptyContentHandling = 0) 
Post: function (url, data, headers = [], continueOnError = true, retries = 0, emptyContentHandling = 0) 
Put: function(url, data, headers = [], continueOnError = true, retries = 0, emptyContentHandling = 0) 
Patch: function(url, data, headers = [], continueOnError = true, retries = 0, emptyContentHandling = 0) 
Delete: function (url, headers = [], continueOnError = true, retries = 0, emptyContentHandling = 0) 
```
## Example
```js
import $ from 'ssjs-fetch';
const result = $.Post('https://httpbin.org/post', {
    foo: 'bar'
});
```