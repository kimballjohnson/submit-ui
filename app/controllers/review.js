import Ember from 'ember';
import sharedActions from '../mixins/shared-actions';


export default Ember.Controller.extend(sharedActions, {
  actions: {
    changeRoute: function(route){
      this.transitionToRoute(route);
    },
    editField: function(route){
      this.transitionToRoute(route);
    },
    submit: function(){
      // communicate with backend here
      this.transitionToRoute("success");
    },
    cancel: function(){
      this.get('store').unloadAll('submission');
      this.transitionToRoute("intro");
    }
  }
});