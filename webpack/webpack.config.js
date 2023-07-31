const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

/**
 * 
 * @param {{env:string}} envVars environment variables provided by the package.json scripts.
 * @returns 
 */
module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    return merge(commonConfig, envConfig)
}