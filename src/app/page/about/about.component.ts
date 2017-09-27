import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	collaborator = [
		{name: "Zé Mané", job: "Developer",
		 photo: "https://br.udacity.com/assets/images/nanodegree-overview/shared/nd-instructors/james-williams.jpg",
		 text: "Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Quem manda na minha terra sou euzis! Detraxit consequat et quo num tendi nada. Suco de cevadiss deixa as pessoas mais interessantis."}
	];
	
	constructor() { }

	ngOnInit() {
	}

}
