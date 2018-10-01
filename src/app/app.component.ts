import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	posts = [
	{
		title: "Post 1",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magni delectus exercitationem consequatur in explicabo vitae, sint mollitia, officiis ex itaque, dolorem. Incidunt et dolores sint hic, qui voluptatibus blanditiis.",
		loveIts: 2,
	},
	{
		title: "Post 2",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magni delectus exercitationem consequatur in explicabo vitae, sint mollitia, officiis ex itaque, dolorem. Incidunt et dolores sint hic, qui voluptatibus blanditiis.",
		loveIts: 0,
	},
	{
		title: "Post 3",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magni delectus exercitationem consequatur in explicabo vitae, sint mollitia, officiis ex itaque, dolorem. Incidunt et dolores sint hic, qui voluptatibus blanditiis.",
		loveIts: -2
	}
	];

}
