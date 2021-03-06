const commonConfig = `externals: {
                        electron: "require('electron')",
                        buffer: "require('buffer')",
                        child_process: "require('child_process')",
                        crypto: "require('crypto')",
                        events: "require('events')",
                        fs: "require('fs')",
                        http: "require('http')",
                        https: "require('https')",
                        assert: "require('assert')",
                        dns: "require('dns')",
                        net: "require('net')",
                        os: "require('os')",
                        path: "require('path')",
                        querystring: "require('querystring')",
                        readline: "require('readline')",
                        repl: "require('repl')",
                        stream: "require('stream')",
                        string_decoder: "require('string_decoder')",
                        url: "require('url')",
                        util: "require('util')",
                        zlib: "require('zlib')",
                        ffi: "require('ffi')",
                        typeorm: "require('typeorm')",
                        sqlite3: "require('sqlite3')",
                        commonjs: "require('commonjs')"
                    },
                    resolve: { // see: http://webpack.github.io/docs/configuration.html#resolve
                        alias: {
                            typeorm: path.resolve(__dirname, "../node_modules/typeorm/typeorm-model-shim")
                        }
                    },`;

module.exports.electronConfig = 'target: "electron-renderer", ' + commonConfig;
module.exports.webConfig = 'target: "web", ' + commonConfig;