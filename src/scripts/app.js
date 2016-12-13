import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import AppView from './view-controller.js'


const AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showHome'
  },
  showHome: function(){
    ReactDOM.render(<AppView currentView="home"/>, document.querySelector("#app-container"))
  },
  initialize: function(){

      Backbone.history.start()
   }
})

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
new AppRouter()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
