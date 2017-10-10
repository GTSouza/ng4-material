import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Application Title';
  
  navItems = [
	{name: 'Autocomplete', route: '/autocomplete'},
	{name: 'Button Toggle', route: '/button-toggle'},
	{name: 'Button', route: '/button'},
	{name: 'Card', route: '/card'},
	{name: 'Checkbox', route: '/checkbox'},
	{name: 'Chips', route: '/chips'},
	{name: 'Datepicker', route: '/datepicker'},
	{name: 'Dialog', route: '/dialog'},
	{name: 'Drawer', route: '/drawer'},
	{name: 'Expansion Panel', route: '/expansion'},
	{name: 'Focus Origin', route: '/focus-origin'},
	{name: 'Gestures', route: '/gestures'},
	{name: 'Grid List', route: '/grid-list'},
	{name: 'Icon', route: '/icon'},
	{name: 'Input', route: '/input'},
	{name: 'List', route: '/list'},
	{name: 'Live Announcer', route: '/live-announcer'},
	{name: 'Menu', route: '/menu'},
	{name: 'Overlay', route: '/overlay'},
	{name: 'Platform', route: '/platform'},
	{name: 'Portal', route: '/portal'},
	{name: 'Progress Bar', route: '/progress-bar'},
	{name: 'Progress Spinner', route: '/progress-spinner'},
	{name: 'Radio', route: '/radio'},
	{name: 'Ripple', route: '/ripple'},
	{name: 'Screen Type', route: '/screen-type'},
	{name: 'Select', route: '/select'},
	{name: 'Sidenav', route: '/sidenav'},
	{name: 'Slide Toggle', route: '/slide-toggle'},
	{name: 'Slider', route: '/slider'},
	{name: 'Snack Bar', route: '/snack-bar'},
	{name: 'Stepper', route: '/stepper'},
	{name: 'Table', route: '/table'},
	{name: 'Tabs', route: '/tabs'},
	{name: 'Toolbar', route: '/toolbar'},
	{name: 'Tooltip', route: '/tooltip'},
	{name: 'Typography', route: '/typography'}
	];
}
