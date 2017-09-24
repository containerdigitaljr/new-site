import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'CoDi Jr.';
	icon = "";
	menu = [
		{tag: "Home",      url: "/"},
		{tag: "Sobre",     url: "/sobre"},
		{tag: "Portfólio", url: "/portfolio"},
		{tag: "Contato",   url: "/contato"}
	];
}
