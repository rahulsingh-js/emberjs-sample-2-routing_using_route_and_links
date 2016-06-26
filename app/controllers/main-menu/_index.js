import Ember from 'ember';

export default Ember.Controller.extend({
	navigationMenu: [
		Ember.Object.create({
			id:1,
			name: 'Menu 1',
			link: 'mainroute/menu1'
		}),
		Ember.Object.create({
			id:2,
			name: 'Menu 2',
			link: 'mainroute/menu2'
		}),
		Ember.Object.create({
			id:3,
			name: 'Menu 3',
			link: 'mainroute/menu3'
		}),
		Ember.Object.create({
			id:4,
			name: 'Menu 4',
			link: 'mainroute/menu4'
		})
	]
});
