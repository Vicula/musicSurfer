import React from 'react'

const AppView = React.createClass({

   getInitialState: function(){


      return STORE.getStoreData()
   },

   componentWillMount: function(){
      let self = this

      STORE.onChange(function(){


         self.setState(STORE.getStoreData())
         console.log('app state changed')
      })
   },

   render: function(){

      switch (this.props.currentView) {
         case "home":
            return <HomeView/>
            break;
         default:

            break;
      }

   }


})


export default AppView
