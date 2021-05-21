import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://i8.amplience.net/i/traeger/3-2-1-baby-back-ribs?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$', 1),
    new Recipe('Test 2', 'This is a second test', 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk', 4)

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
