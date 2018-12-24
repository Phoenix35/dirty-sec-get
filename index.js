/*
    dirty-sec-get is a simple node.js package that resolves the FULL body of an HTTPS GET response
    Copyright (C) 2018  Phoenix35
 */

"use strict";

const { get } = require("https");

/**
 * Fully consumes an HTTPS response stream from a GET request and resolves the body.
 * @param {URL | string | Object} url  .
 * @param {?string}           encoding Set it explicitly to `null` to keep a buffer
 * @return {Promise<string | Buffer>}  The full body of the response
 */
module.exports = (url, encoding = "utf8") => new Promise((resolve, reject) => {

  get(url, async (res) => {
    const data = [];

    if (encoding)
      res.setEncoding(encoding);

    res.on("error", reject);

    for await (const chunk of res)
      data.push(chunk);

    resolve(encoding
      ? data.join("")
      : Buffer.concat(data));

  }).on("error", reject);

});
