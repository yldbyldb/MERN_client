import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './App'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducers, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: `${gtmContainerId}`,

    //       // Include GTM in development.
    //       //
    //       // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: true,

    //       // datalayer to be set before GTM is loaded
    //       // should be an object or a function that is executed in the browser
    //       //
    //       // Defaults to null
    //     defaultDataLayer: { platform: "gatsby" },

    //       // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
    //     // dataLayerName: "YOUR_DATA_LAYER_NAME",

    //       // Name of the event that is triggered
    //       // on every Gatsby route change.
    //       //
    //       // Defaults to gatsby-route-change
    //     // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
    //       // Defaults to false
    //     enableWebVitalsTracking: true,
    //       // Defaults to https://www.googletagmanager.com
    //     // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
    //   },
    // },