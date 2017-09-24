import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

	content = [
		{image: "Teste", url: ""},
		{image: "Teste", url: ""},
		{image: "Teste", url: ""},
		{image: "Teste", url: ""},
		{image: "Teste", url: ""},
		{image: "Teste", url: ""},
		{image: "Teste", url: ""},
		{image: "Teste", url: ""}
	];
	
	constructor() { }

	ngOnInit() {
	}
}
