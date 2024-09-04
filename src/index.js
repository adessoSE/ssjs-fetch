export default {
  Get: function (
    url,
    headers = [],
    continueOnError = true,
    retries = 0,
    emptyContentHandling = 0
  ) {
    return this._execute(
      url,
      "GET",
      headers,
      undefined,
      continueOnError,
      retries,
      emptyContentHandling
    );
  },
  Post: function (
    url,
    data,
    headers = [],
    continueOnError = true,
    retries = 0,
    emptyContentHandling = 0
  ) {
    return this._execute(
      url,
      "POST",
      headers,
      data,
      continueOnError,
      retries,
      emptyContentHandling
    );
  },
  Put: function (
    url,
    data,
    headers = [],
    continueOnError = true,
    retries = 0,
    emptyContentHandling = 0
  ) {
    return this._execute(
      url,
      "PUT",
      headers,
      data,
      continueOnError,
      retries,
      emptyContentHandling
    );
  },
  Patch: function (
    url,
    data,
    headers = [],
    continueOnError = true,
    retries = 0,
    emptyContentHandling = 0
  ) {
    return this._execute(
      url,
      "PATCH",
      headers,
      data,
      continueOnError,
      retries,
      emptyContentHandling
    );
  },
  Delete: function (
    url,
    headers = [],
    continueOnError = true,
    retries = 0,
    emptyContentHandling = 0
  ) {
    return this._execute(
      url,
      "DELETE",
      headers,
      undefined,
      continueOnError,
      retries,
      emptyContentHandling
    );
  },
  _execute: function (
    url,
    method,
    headers,
    data,
    continueOnError,
    retries,
    emptyContentHandling
  ) {
    var req = new Script.Util.HttpRequest(url);
    req.emptyContentHandling = emptyContentHandling;
    req.retries = retries;
    req.continueOnError = continueOnError;
    for (let i = 0; i < headers.length; i++) {
      req.setHeader(headers[i].name, headers[i].value);
    }
    req.method = method;
    if (data || data == "") {
      if (typeof data != "string") {
        data = Stringify(data);
        req.contentType = "application/json";
      }
      req.postData = data;
    }
    const resp = req.send();
    return {
      statusCode: resp.statusCode,
      headers: resp.headers,
      data: resp.content,
      url: url,
      json: function() {
        return Platform.Function.ParseJSON(String(this.data))
      } 
    };
  },
};
