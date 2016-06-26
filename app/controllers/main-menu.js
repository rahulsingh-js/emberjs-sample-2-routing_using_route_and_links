import Ember from 'ember';

export default Ember.Controller.extend({
	navigationMenu: [
		Ember.Object.create({
			id:1,
			name: 'Menu 1',
			link: 'main-menu.menu1'
		}),
		Ember.Object.create({
			id:2,
			name: 'Menu 2',
			link: 'main-menu.menu2'
		}),
		Ember.Object.create({
			id:3,
			name: 'Menu 3',
			link: 'main-menu.menu3'
		}),
		Ember.Object.create({
			id:4,
			name: 'Menu 4',
			link: 'main-menu.menu4'
		})
	]
});
