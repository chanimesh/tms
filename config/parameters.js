"use strict";



const serverConfig = {
    "serverAppPath": "./server",
    "srcPath": "./server/src",
    "testPath": "./server/test",
    "distFolder": "./dist/server",
    "distServerJsFolder": "./dist",
    "serverJsFile": "app.js",
    "packageJsonFile": "package.json"
};

const clientConfig = {
    "clientAppPath": "./client",
    "appMainFile": "app.js",
    "cssMainFile": "app.css",
    "hbsFolder":"./client/views",
    "scssSrcPath": "./client/src/scss",
    "imgSrcPath": "./client/src/images",
    "fontsPath": "./client/src/fonts",
    "srcPath": "./client/src/js",
    "distFolder": "./dist/client"
};

const otherConfig = {
    "distFolder": "./dist"
};

module.exports = {  "server": serverConfig, "client": clientConfig,"other": otherConfig};
