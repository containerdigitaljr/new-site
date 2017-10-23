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
		{tag: "Home",      slug: "/",          icon: "home"},
		{tag: "Sobre",     slug: "/sobre",     icon: "group"},
		{tag: "Portfólio", slug: "/portfolio", icon: "collections"},
		{tag: "Contatos",  slug: "/contatos",  icon: "contacts"}
	];
}