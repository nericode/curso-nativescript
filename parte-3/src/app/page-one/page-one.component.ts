import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'page-one',
	templateUrl: './page-one.component.html',
	styleUrls: ['./page-one.component.css']
})

export class PageOneComponent implements OnInit {

	constructor(
		private router: RouterExtensions
	) { }

	ngOnInit() { }

	public onNavigate() {
		this.router.navigate(['/page-two']);
	}
}