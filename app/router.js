
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main-menu', {path:'/mainroute'}, function(){
    this.route('menu1', {path:'/menu1'});
    this.route('menu2', {path:'/menu2'});
    this.route('menu3', {path:'/menu3'});
    this.route('menu4', {path:'/menu4'});
  });
});

export default Router;
