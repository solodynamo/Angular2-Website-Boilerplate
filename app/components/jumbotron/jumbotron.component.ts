import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent{
	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;

	constructor(){
		this.jbtHeading = 'Welcome NG2 Boilerplate';
		this.jbtText = 'Use this boilerplate and to quickstart angular 2 website/app dev';
		this.jbtBtnText = 'Read More';
		this.jbtBtnUrl = 'http://www.github.com/solodynamo';
	}
}
