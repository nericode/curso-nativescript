import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'page-two',
	templateUrl: './page-two.component.html',
	styleUrls: ['./page-two.component.css']
})

export class PageTwoComponent implements OnInit {

	constructor(
		private router: RouterExtensions
	) { }

	ngOnInit() { }

	public onBack() {
		this.router.back();
	}
}